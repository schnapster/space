  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 42,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "ffff66"
      },
      "shape": {
        "type": ["star"],
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 19.18081918081918,
          "size_min": 0.5,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      },
      nb: 80
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 150,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

const audioPlayer = document.getElementById("audio-player");

if (window.localStorage.getItem('music')) {
  turnOnAudioPlayer();
}

function toggleAudioPlayer() {
    const current = audioPlayer.style.visibility;
    if (current !== "visible") {
      turnOnAudioPlayer()
    } else {
      turnOffAudioPlayer()
    }
}

function turnOnAudioPlayer() {
  window.localStorage.setItem('music', 1)
  audioPlayer.src = "https://www.youtube-nocookie.com/embed/rDBbaGCCIhk?autoplay=1&playlist=rDBbaGCCIhk&loop=1&modestbranding=1"
  audioPlayer.style.visibility = "visible";
}

function turnOffAudioPlayer() {
  window.localStorage.removeItem('music')
  audioPlayer.src = "";
  audioPlayer.style.visibility = "hidden";
}

document.getElementById("audio-button").addEventListener("click touchstart", toggleAudioPlayer);
