import sys
import time
import re
import os
import shutil
class HandDicm(object):
    #re_the_first_match="\d{4}\d{2}\d{2}"
    re_the_first_match="\d{4}(((0[1-9])|(1[0-2])))(((0[1-9])|([1-2][0-9])|(3[0-1])))"
    list_dirs=[]
    def __init__(self):
        pass
    def __init__(self,dir_name=""):
        pass
    def get_now(self):
        return time.strftime('%Y%m%d_%H%M%S')
    def include_underline(self,filename):
        if isinstance(filename,str):
            if '_' in filename:
                return True
        return False
    def get_the_first_str(self,filename):
        if isinstance(filename,str):
            if self.include_underline(filename):
                list_filename=filename.split('_')
                return list_filename[0]
            else:
                return filename
        return filename
    def the_first_str_is_match(self,filename):
        the_first_str=self.get_the_first_str(filename)
        if re.match(self.re_the_first_match,the_first_str):
            return True
        return False
    def add_dirname_to_list(self,dirname):
        if not dirname in self.list_dirs:
            self.list_dirs.append(dirname)
        return
    def get_file_datetime(self,filename):
        if os.path.isfile(filename):
            statInfo=os.stat(filename)
            return time.strftime('%Y%m%d_%H%M%S', time.localtime(statInfo.st_mtime))
        else:
            raise "notFile"
        return ""
    def rename_file(self,dirname):
        for root,dirnames,filenames in os.walk(dirname):
            for filename in filenames:
                old_file=os.path.join(root,filename)
                new_file=os.path.join(root,self.get_file_datetime(old_file)+"["+os.path.splitext(filename)[0]+"]"+os.path.splitext(filename)[1])
                if  filename.startswith("."):
                    print(". file not renamed "+old_file)
                    continue
                if not self.the_first_str_is_match(filename):
                    os.rename(old_file,new_file)
                    print(old_file+"==>"+new_file)
                else:
                    print("not renamed "+old_file)
        return
    def mkdir(self,dirname):
        if not os.path.isdir(dirname):
            os.mkdir(dirname)
            print("mkdir "+dirname)
            # self.add_dirname_to_list(dirname)
        return
    def create_dir(self,dirname):
        for root,dirnames,filenames in os.walk(dirname):
            for filename in filenames:
                abs_file=os.path.join(root,filename)
                print(abs_file)
                parent_dirname=os.path.dirname(abs_file)
                print(os.path.dirname(abs_file))
                if self.the_first_str_is_match(filename):
                    self.mkdir(os.path.join(parent_dirname,self.get_the_first_str(filename)))
        return
    def move(self,dirname):
        for root,dirnames,filenames in os.walk(dirname):
            for dirname in dirnames:
                abs_dir=os.path.join(root,dirname)
                # print(abs_dir)
                # parent_dirname=os.path.dirname(abs_dir)
                # print(parent_dirname)
                self.move_to_dir(abs_dir)
        return
    def move_to_dir(self,dirname):
        if os.path.isdir(dirname):
            pdir=os.path.dirname(dirname)
            for v in os.listdir(pdir):
                if os.path.isfile(os.path.join(pdir,v)) and self.the_first_str_is_match(v):
                    want_to_dir=os.path.join(pdir,self.get_the_first_str(v))
                    if os.path.isdir(want_to_dir):
                        print(want_to_dir)
                        shutil.move(os.path.join(pdir,v),want_to_dir)
                # print(os.path.isdir(os.path.join(pdir,v)))
                # print("yes  "+v)
        return
    def handle_dicm_main(self,dirname):
        self.rename_file(dirname)
        self.create_dir(dirname)
        self.move(dirname)
        return
def test():
    hd = HandDicm()
    hd.handle_dicm_main(sys.argv[1])
if __name__ == "__main__":
    test()
    # print(sys.argv[0])