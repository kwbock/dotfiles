#!/bin/bash

###################
## Vim Setup     ##
###################
overwrite_vim_dir=Y
if [ -d ~/.vim ]; then
  echo "Would you like to overwrite ~/.vim? [Yn]:"
  read vim_dir_input

  # check input string
  if [ "$vim_dir_input" != "" ]; then
    $overwrite_vim_dir=$vim_dir_input
  fi
fi

if [ "$overwrite_vim_dir" == "Y" ] || [ "$overwrite_vim_dir" == "y" ]; then
  echo "Preparing to overwrite ~/.vim"
  rm -rf ~/.vim
  ln -s `pwd`/.vim ~/.vim
  echo "Overwrite of ~/.vim complete"
fi

overwrite_vimrc=Y
if [ -f ~/.vimrc ]; then
  echo "Would you like to overwrite your .vimrc? [Yn]:"
  read vim_rc_input
  if [ "$vim_rc_input" != "" ]; then
    $overwrite_vimrc=$vim_rc_input
  fi
fi

if [ "$overwrite_vimrc" == "Y" ] ||  [ "$overwrite_vimrc" == "y"]; then
  echo "Preparing to overwrite ~/.vimrc"
  rm ~/.vimrc
  ln -s `pwd`/.vimrc ~/.vimrc
  echo "Overwrite of ~/.vimrc complete"
fi

#################
## bash files ###
#################
overwrite_bash_aliases=Y
if [ -f ~/.bash_aliases ]; then
  echo "Would you like to overwrite your .bash_aliases? [Yn]:"
  read bash_a_input
  if [ "$bash_a_input" != "" ]; then
    $overwrite_bash_aliases=$bash_a_input
  fi
fi

if [ "$overwrite_bash_aliases" == "Y" ] || [ "$overwrite_bash_aliases" == "y" ]; then
  echo "Preparing to overwrite ~/.bash_aliases"
  ln -sf `pwd`/.bash_aliases ~/.bash_aliases
  echo "Overwrite of ~/.bash_aliases complete"
fi

ln -sf `pwd`/.slate.js ~/.slate.js
ln -sf `pwd`/.tmux.conf ~/.tmux.conf
ln -sf `pwd`/.tmux ~/.tmux
ln -sf `pwd`/.tmux-powerlinerc ~/.tmux-powerlinerc
ln -sf `pwd`/.gitignore ~/.gitignore
export DEV_BAR_ENABLED=1
