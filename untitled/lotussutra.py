# -*- coding: utf-8 -*-
import urllib.request
from bs4 import BeautifulSoup
import re
#
# url ='http://www.fotuozhengfa.com/chaojing/lotus-sutra-1'
# hdr = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
#        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
#        'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
#        'Accept-Encoding': 'none',
#        'Accept-Language': 'en-US,en;q=0.8',
#        'Connection': 'keep-alive'}
# req=urllib.request.Request(url,headers=hdr)
# response = urllib.request.urlopen(req)
# soup =BeautifulSoup(response,"html.parser")
# alljp=soup.find_all("p", class_="jp")
# allpp=soup.find_all("p", class_="pp")
# for jp in alljp:
#     for zi in jp.find_all("span"):
#         print(zi.text)
# for pp in allpp:
#     for py in pp.find_all("span"):
#         print(py.text)






def getAndReplaceLine(teststr):
    res='[\u4e00-\u9fa5]\([a-zà-ǜ|　|]+\)'
    result=re.findall(res,teststr)
    # print(result)
    re.sub(res,"m",teststr)
    for v in result:
        if teststr.find("<ruby>"+v+"</ruby>")==-1:
            teststr=teststr.replace(v,"<ruby>"+v+"</ruby>")
    return teststr

def writeFile():
    f = open("mflh 2.txt","r")
    fout = open("out.txt", "w")
    lines = f.readlines()

    for line in lines:
        s="<p>"
        s+=getAndReplaceLine(line)
        s+="</p>"
        fout.write(s)
    f.close()
    fout.close()
writeFile()
# teststr="妙(miào)法(fǎ)莲(lián)华(huá)经(jīng)序(xù)品(pǐn)第(dì)一(yī),"
# print(teststr.find("妙s"))
# print(getAndReplaceLine(teststr))