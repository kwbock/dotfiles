" Kyle Bock Vim setup
set nocompatible
filetype off

call pathogen#runtime_append_all_bundles()

" basic setup params
syntax on
filetype plugin indent on
set cul             " highlight the cursor line
set number          " turn on line numbers
set mouse=a

" Indentation settings
set tabstop=2
set shiftwidth=2
set autoindent
set smartindent
set copyindent
set smarttab
set expandtab


" Search Section
" Use case insensitive search except when using capital letters
set ignorecase
set smartcase
set hlsearch        " Highlight search results
set incsearch       " Show searches as you type

" Autmatically read file changed outside of vim
set autoread

" Vim Colorscheme
syntax enable
set background=dark
colorscheme solarized

" FFF_textmate directives
nmap <F5> :FufCoverageFile<CR>
