from bs4 import BeautifulSoup
import os
class H2P(object):
    def __init__(self,k="",h2="",ps=""):
        self.k=k
        self.h2=h2
        self.ps=ps

class Book(object):
    def __init__(self,epubtmp="epubtmp"):
        tocFile=open(epubtmp+"/OEBPS/toc.ncx",'rb')
        #print(os.path.dirname(tocFile.name))
        htmldoc=tocFile.read().decode('utf8')
        #soup = BeautifulSoup(open("epubtmp/OEBPS/Text/Section0001.xhtml",'rb').read().decode('utf8'))
        tocSoup=BeautifulSoup(htmldoc,"html.parser")
        self.title=tocSoup.doctitle.text
        self.catalogs=[]
        self.h2pList=[]
        strSrcHtml=""
        for t in tocSoup.find_all("navpoint"):
            if strSrcHtml!=t.content["src"][0:(t.content["src"].index("html")+4)]:
                strSrcHtml=t.content["src"][0:(t.content["src"].index("html")+4)]
            else:
                self.catalogs[-1][1]=t.navlabel.text.strip('\n')
                continue
            self.catalogs.append([t["playorder"],t.navlabel.text.strip('\n')])
            # print(t.navlabel.text)
            # print(t["playorder"])
            # print(t.content["src"][0:(t.content["src"].index("html")+4)])
            basePath=os.path.dirname(tocFile.name)
            hpFile=open(basePath+"/"+strSrcHtml,'rb')
            hpsoup=BeautifulSoup(hpFile.read().decode(('utf8')),"html.parser")
            print("BeautifulSoup parsing "+hpFile.name+"......")
            h2p=H2P()
            h2p.k=t["playorder"]
            #h2p.h2=hpsoup.h2.find_all("ruby").__str__().replace("[","").replace("]","").replace(",","").replace(" ","").strip('\n')
            if hpsoup.h1!=None:
                for v in hpsoup.h1.find_all("ruby"):
                    h2p.h2=h2p.h2+(str(v))
                h2p.h2+="<br/>"
            if hpsoup.h2!=None:
                for v in hpsoup.h2.find_all("ruby"):
                    h2p.h2=h2p.h2+(str(v))
                h2p.h2+="<br/>"
            if hpsoup.h3!=None:
                for v in hpsoup.h3.find_all("ruby"):
                    h2p.h2=h2p.h2+(str(v))
            #prirnt(type(h2p.h2))
            #h2p.ps=hpsoup.find_all("p").__str__().replace("[","").replace("]","").replace(",","").replace(" ","").strip('\n')
            for v in hpsoup.find_all("p"):
                h2p.ps=h2p.ps+(str(v))
            # print(h2p.ps)
            #print(h2p.k)
            #print(hpsoup.h2.find_all("ruby").__str__())
            #print(h2p.ps)
            self.h2pList.append(h2p)
            print("end")
            hpFile.close()
        tocFile.close()
    def genHtml(self,resultHtml="result.html"):
        markuph2p='''
                <div class="content-wrapper" data-pos="${k}">
                  <div class="main-content">
                   <a name="u0"></a>
                   <a name="1" id="anchor-1"></a>
                   <h2 class="title-level-2"> ${h2} </h2>
                   <div class="para">
                        ${ps}
                   </div>
                  </div>
                  <div class="other-content" id="J-other-content" style="display:none;"></div>
                 </div>'
            '''
        markupc='''
                    <li class="catalog-item level1" data-anchor="${k}" data-page="0">${c}</li>
                '''



        templatFile=open("show-content/book.html",'rb')
        templatHtmldoc=templatFile.read().decode('utf8')
        templatSoup=BeautifulSoup(templatHtmldoc,"html.parser")
        templatFile.close()


        for t in templatSoup.find_all(text="${title}"):
            t.parent.string=self.title
        for t in templatSoup.find_all(text="${lemmatitle}"):
            t.parent.string=self.title
        tagDivHp=templatSoup.find("div",id="hp")
        tagOlcataloglist=templatSoup.find("ol",class_="catalog-list")
        for catalog in self.catalogs:
            s=markupc.replace("${k}",catalog[0])
            s=s.replace("${c}",catalog[1])
            tagOlcataloglist.append(BeautifulSoup(s,"html.parser"))
        for v in self.h2pList:
            s=markuph2p.replace("${k}",v.k)
            s=s.replace("${h2}",v.h2)
            s=s.replace("${ps}",v.ps)
            tagDivHp.append(BeautifulSoup(s,"html.parser"))
        htmlFile=open("show-content/"+resultHtml,'w',-1,'utf8')
        htmlFile.write(templatSoup.prettify())
        htmlFile.close()
if __name__=="__main__":
    b=Book()
    b.genHtml()


