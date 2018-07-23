# Path to your oh-my-zsh installation.
export ZSH=/Users/kylebock/.oh-my-zsh

# Set name of the theme to load.
# Look in ~/.oh-my-zsh/themes/
# Optionally, if you set this to "random", it'll load a random theme each
# time that oh-my-zsh is loaded.
ZSH_THEME="robbyrussell"

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git wd)

# User configuration

#export PATH="/opt/boxen/rbenv/shims:/opt/boxen/rbenv/bin:/opt/boxen/rbenv/plugins/ruby-build/bin:/opt/boxen/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin"
export PATH="/Users/kylebock/bin:/Users/kylebock/.dotfiles/bin:/opt/boxen/rbenv/shims:bin:/opt/boxen/rbenv/bin:/opt/boxen/ruby-build/bin:./node_modules/.bin:/opt/boxen/nodenv/shims:/opt/boxen/nodenv/bin:/opt/boxen/bin:/opt/boxen/homebrew/bin:/opt/boxen/homebrew/sbin:/usr/local/bin:/usr/local/sbin:/usr/bin:/bin:/usr/sbin:/sbin:/opt/X11/bin"

export ANDROID_HOME=/opt/boxen/homebrew/opt/android-sdk

# export MANPATH="/usr/local/man:$MANPATH"

source $ZSH/oh-my-zsh.sh

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# ssh
export SSH_KEY_PATH="~/.ssh/id_rsa"

#export AWSSH_BASTION_HOST="omni1.salesloft.com"
#export AWSSH_USERNAME=""
#export AWSSH_ACCESS_KEY_ID - The jump user id.
#export AWSSH_SECRET_ACCESS_KEY - The jump user secret key.
export NPM_TOKEN=YgxZUGYkoqCijuIeMj2tGVKDwMvow3WlgG1Ea6QHICwlYMW3HFfxycsr0jKeTBc1
# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"
source ~/src/awssh/setup.zsh
[ -f ~/.bash_aliases ] && source ~/.bash_aliases
[ -f ~/.bash_functions ] && source ~/.bash_functions
[ -f /opt/boxen/env.sh ] && source /opt/boxen/env.sh
test -s "$HOME/.kiex/scripts/kiex" && source "$HOME/.kiex/scripts/kiex"
