#!/usr/bin/env python3
import sys
import getopt
import ZFile
import os.path
import os
from Bs import Book
import shutil
def Usage():
    print('epub_to_html usage:')
    print('-h,--help: print(help message.)')
    print('-v, --version: print(script version')
    print('-o, --output: input an output verb')
    print('--foo: Test option ')
    print('--fre: another test option')
    return


def Version():
    print('epub_to_html 1.0.0.0.1')


def OutPut(args):
    print('Hello, %s' % args)


def main(argv):
    try:
        opts, args = getopt.getopt(argv[1:], 'hvo:', ['output=', 'foo=', 'fre='])
    except getopt.GetoptError as err:
        print(str(err))
        Usage()
        sys.exit(2)
    for o, a in opts:
        if o in ('-h', '--help'):
            Usage()
            sys.exit(1)
        elif o in ('-v', '--version'):
            Version()
            sys.exit(0)
        elif o in ('-o', '--output'):
            OutPut(a)
            sys.exit(0)
        elif o in ('--foo',):
            Foo = a
        elif o in ('--fre',):
            Fre = a
        else:
            print('unhandled option')
            sys.exit(3)


if __name__ == '__main__':
    #main(sys.argv)
    # print(sys.argv[len(sys.argv) - 1])
    tmpFileName="./epubtmp"
    if len(sys.argv)>1:
        if os.path.isfile(sys.argv[len(sys.argv) - 1]):
            try:
                if os.path.exists(tmpFileName):
                    shutil.rmtree(tmpFileName)
                f = ZFile.ZFile(sys.argv[len(sys.argv) - 1], 'r', ".")
                f.extract_to(tmpFileName)
            except Exception as err:
                print(err)
            else:
                if os.path.exists(tmpFileName+"/OEBPS/toc.ncx"):
                        b=Book()
                        b.genHtml()
        else:
            print(sys.argv[len(sys.argv) - 1] + " is not a effective file!")