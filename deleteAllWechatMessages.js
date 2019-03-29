launchApp('微信')

sleep(500)

while (press(500, 580, 1500)) {
	while (!click('删除该聊天')) { }
	while (!click('删除')) { }
	sleep(300)
}

engines.stopAll()