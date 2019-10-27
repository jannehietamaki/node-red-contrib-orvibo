
# Orvibo/HomeMate WebSocket server

A Node-RED compatible WebSocket server to control the Orvibo/HomeMate smart curtains (and maybe sockets as well, not tested).

This is based on Orvibo B25 Server by SandySound [http://github.com/sandysound/orvibo-b25-server]

For this to work, you need to forward ``homemate.orvibo.com`` TCP port 10001 to a computer running this server. In my Hass.io setup this can be easily done by using dnsmasq plugin.

Node-RED flow can be found [here](orvibo.flow)

[!nodered.png]

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

Based on orvibo-b25-server by [SandySound - Github](https://github.com/sandysound)

Big thanks to [Grayda](https://github.com/Grayda/) and [insertjokehere](https://github.com/insertjokehere) for all their research and hard work into how these sockets work

