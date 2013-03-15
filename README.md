# README

Currently this is my basic setup of dotfiles. It currently provides support for the following.
* Vim
* TMux, this configuration has only been tested to work on tmux >= 1.6


## Vim
Current vim plugins include the following. I'm too lazy to look at the git submodules to give you links, you can do that.
  * MiniBufExplorer
  * NERDTree
  * FuzzyFileFinder
  * vim-rails
  * vim-bundler
  * vim-haml
  * vim-colors-solarized
  * vim-colors-vividchalk
  * vim-fugitive

Some notes about my vim setup.
  1. I currently have mouse integration enabled.
  2. `<F2>` is a pastetoggle key to allow pasting from the clipboard without destroying formatting
  3. When files are opened they should be closed with `<esc>:bd`
  4. `<Ctrl-n>` will toggle the NERDTree display in and out
  5. `<F5>` Will invoke `:FufCoverageFile`. This is useful for opening files in a rails project similar to Command+T or Command+p
  6. Read the rc to figure out the rest.

## Tmux
Currently I am only really using tmux-powerline with some custom command mappings for switching open windows that you should be able to read in my .tmux.conf
