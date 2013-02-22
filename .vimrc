" Kyle Bock Vim setup
set nocompatible
filetype off

call pathogen#runtime_append_all_bundles()

" basic setup params
syntax on
filetype plugin indent on
set cul             " highlight the cursor line
set number          " turn on line numbers
set mouse=a         " turn on mouse integration. will move cursor to mouse position

"" Modes
nnoremap <F2> :set invpaste paste?<CR>
set pastetoggle=<F2>

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

" FuzzyFinder directives
nmap <F5> :FufCoverageFile<CR>

" NERDtree settings
nmap <c-n> :NERDTreeToggle<CR>
let NERDTreeShowHidden=1 
let g:nerdtree_tabs_open_on_console_startup = 1
let g:nerdtree_tabs_open_on_gui_startup = 1
let g:nerdtree_tabs_no_startup_for_diff = 1
let g:nerdtree_tabs_smart_startup_focus = 1
let g:nerdtree_tabs_autoclose = 1

" MiniBufExplorer Settings
let g:miniBufExplMapWindowNavVim = 1
let g:miniBufExplMapWindowNavArrows = 1
let g:miniBufExplMapCTabSwitchBufs = 1
let g:miniBufExplModSelTarget = 1
let g:miniBufExplorerMoreThanOne = 1

" map bd to Bclose to keep window layout
map :bd :Bclose

" Setup the buffers
autocmd VimEnter * NERDTree
autocmd VimEnter * MiniBufExplorer
