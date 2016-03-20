import sys
from datetime import datetime
import time

class HandDicm(object):
    def __init__(self):
        pass
    def __init__(self,dir_name=""):
        pass
    def get_now(self):
        return time.strftime('%Y%m%d_%H%M%S')
    def include_underline(self,filename):
        if isinstance(filename,str):
            if "_" in filename:
                return True
        return False
def test():
    hd = HandDicm()
    print(hd.get_now())
    print(hd.include_underline(hd.get_now()))
if __name__ == "__main__":
    test()
    print(sys.argv[0])