push-dev:
	./gradlew clean :pple-main-interfaces:buildNeeded :pple-main-interfaces:jib -Djib.to.image="106380540986.dkr.ecr.ap-northeast-2.amazonaws.com/pple-main-dev" -Djib.to.credHelper="ecr-login"
