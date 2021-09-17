# simple-demo

A very simple [Tangram](http://github.com/tangrams/tangram) setup.

Live demo: http://tangrams.github.io/simple-demo/

![tangram-demo screenshot](https://cloud.githubusercontent.com/assets/459970/6629470/c007b1de-c8e4-11e4-854e-fd69f5135b3a.png)

### To run locally:

1) Clone this repo

2) Sign up for a Nextzen API key here: https://developers.nextzen.org/

3) Edit the `scene.yaml` file and replace the `api_key` value with your own key.

4) Start a web server in this demo's directory:

    python -m SimpleHTTPServer 8000
    
If that doesn't work, try:

    python -m http.server 8000
    
5) Then navigate to: [http://localhost:8000](http://localhost:8000)
