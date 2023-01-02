PROJECTNAME = boost
CONTRIBUTOR = Pol Moneys
EMAIL = "<p0lm0n3ys@gmail.com>"

info:
	@echo '@@ DEV @@' 
	@echo " $ make setup"
	@echo " $ make dev"
	@echo " $ make mdn q=42 "
	@echo '@@ LOG @@' 
	@echo " $ make status "
	@echo " $ make log "
	@echo '@@ CURL @@' 
	@echo " $ make tryget url=apiurl "
	@echo " $ make trypost url=apiurl json={"answer":42} "
	@echo " $ make trydownload url=fileurl "
	@echo " $ make tryauth url=apiurl auth=user:pass "

setup:
	@nvm use --lts

dev:
	@cd app 
	@yarn dev
	@open -a "Google Chrome" http://localhost.3000 

mdn: 
	@open -a "Google Chrome" "http://www.google.com/search?q=mdn.io+$(q)" 

status: 
	@git status -sb

log:
	@git log --graph --decorate --pretty=oneline --abbrev-commit --all --full-history

tryget: 
	@curl -i $(url)

trypost:
	@curl -X POST -d '$(json)' -H "Content-Type: application/json" $(url)

trydownload:
	@curl -OL $(url)

tryauth:
	@curl -i -u '$(auth)' $(url)


