#!/usr/bin/python

# import tkinter
# top = tkinter.Tk()
# Code to add widgets will go here...
# top.mainloop()
# label = tkinter.Label(top,text='Hello World')
# tkinter.mainloop()

from kivy.app import App
from kivy.uix.button import Button
class MyApp(App):
    def build(self):
        return Button(text='hello world')
if __name__=='__main__':
    MyApp().run()