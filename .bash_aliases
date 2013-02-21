#commonly used aliases
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'
alias cls='clear; la'
alias mysqlr='mysql -u root'
alias dev='cd ~/Documents/dev'
alias gh='cd ~/Documents/dev/github'
alias vor='cd ~/Sites/wordpress/wp-content/themes/viewsofrome-theme'
alias eultheme='cd ~/Sites/eultheme/wp-content/themes/eultheme'
alias galyn='cd ~/Documents/dev/github/georgia_lynchings'
alias startsquid='squid -NCd1'
alias tunnel='ssh -l kbock -L 1337:dev11.library.emory.edu:9193 170.140.215.59 cat -'
alias smtp='python -m smtpd -n -c DebuggingServer localhost:1025'
alias skodap='export HTTP_PROXY=http://skoda.library.emory.edu:3128/'

#git aliases
alias status='git status'
alias branch='git branch'
alias push='git push'
alias clone='git clone'
alias log='git log --oneline --graph --decorate --all'
alias gdiff='git diff'

#git flow aliases
alias flow='git flow'
alias gffs='flow feature start'
alias gfff='flow feature finish'
alias gffco='flow feature checkout'

#for virtualenvwrapper
alias vew='/usr/local/bin/virtualenvwrapper.sh'
alias lsve='lsvirtualenv'
alias lssp='lssitepackages'

#manage.py aliases
alias runserver='./manage.py runserver 0.0.0.0:8000'
alias syncdb='./manage.py syncdb'
alias migrate='./manage.py migrate'
alias shell='./manage.py shell'

alias findnosvn='find . \! \( -name .svn -prune \)'

#solr
alias solrstart='solr /usr/local/Cellar/solr/3.5.0/libexec/example/multicore/'

#xcode
alias xmake='xcodebuild'
