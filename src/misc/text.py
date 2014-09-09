'''
Created on May 13, 2014

@author: igor
'''
import re    
from nltk.tokenize.punkt import PunktWordTokenizer
from itertools import chain
import translit


#TreebankWordTokenizer
class Text(object):
    
    def __init__(self,flnm,stress_sign=None):

        with open(flnm)  as f:
            self.text=f.read().decode("utf8")
        self.modtext=self._tokenize()
        self.stress_sign=stress_sign
        self.freq_lst=None
        
    
    def _tokenize(self):
        tok=PunktWordTokenizer()
        #tok=TreebankWordTokenizer()
        split_whitespace=lambda: re.compile(r'(\s+)').split(re.sub(u"\."," .",self.text))
        return list(chain(*[s if s.isspace() else tok.tokenize(s) for s in split_whitespace()]))

             
    def to_string(self):  
        return "".join(self.modtext).replace(" .",".")
    
    
    
    def apply(self,f,phonetic=False,append=True,only_words=True,pre_f=lambda x: x):
        func=lambda word: f(translit.PhoneticTrans("`").basic_translit(word)) if phonetic else f(word)
        if only_words:
            append=lambda word,res: u"{0}#{{{1}}}".format(word,res) if append and word!=res and word not in "(){}[],;./\\><?!@#$%%^&* " else word
        else:
            append=lambda word,res: u"{0}#{{{1}}}".format(word,res) if append and word!=res else word
        self.modtext=[append(w,func(pre_f(w))) for w in self.modtext]
        return self

    def add_freq(self):
        if self.freq_lst is None:
            with open("data/rnc2009.csv") as f:
                self.freq_lst={l[1]:(l[0],l[2]) for l in (ln.decode("utf8").split("\t") for ln in f.readlines())}
        
        def map_freq(word): 
            word_lookup=word if self.stress_sign is None else word.replace(self.stress_sign,"")
            try:
                return u"{0}#{{{1}}}".format(word,self.freq_lst[word_lookup][1])
            except:
                return word 
        self.modtext=[map_freq(w) for w in self.modtext]
        return self   


reduce(lambda a,x: x(a),[str.upper,str.title],"asddas")
