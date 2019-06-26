## Building

Configure server by adding following content to your config file:

```js
platforms: {
    samsung: {
        server: {
            ip: '192.168.1.xxx'
        }
    }
}
```

Where `ip` is IP address of your web-server (by default it is set to the local IPv4 address).

Then use ZombieBox CLI to build application:

```bash
npx zombiebox build samsung
```
