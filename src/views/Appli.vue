<template>
  <div>
    <h1>Soundboard</h1>
    <button class="button" @click="playPerfect"><img class="image" src="https://media.ultratop.be/cover/big/ed_sheeran-perfect_s.jpg" /></button>
    <button class="button" @click="playPercussion"><img class="image" src="https://www.thomann.de/blog/wp-content/uploads/2017/05/10805740_800.jpg" /></button>
    <button class="button" @click="playPiano"><img class="image" src="https://d1aeri3ty3izns.cloudfront.net/media/49/499349/600/preview.jpg" /></button>
    <button class="button" @click="playTimbales"><img class="image" src="https://mjcgex.fr/wp-content/uploads/2019/06/balafon-cours-300x167.jpg" /></button>
    <button class="button" @click="playBass"><img class="image" src="https://www.woodbrass.com/images/SQUARE400/woodbrass/ROLAND+HANDSONIC+HPD20.JPG" /></button>
    <button class="button" @click="playBass2"><img class="image" src="https://thumbs.static-thomann.de/thumb/orig/pics/bdb/416099/13471951_800.jpg" /></button>

    <div class="audio">
    <h1>Recorder/Analyser</h1>
      <div class="recorder">
      <audio-recorder
        upload-url="YOUR_API_URL"
        :attempts="10"
        :time="5"
        :headers="headers"
        :before-recording="callback"
        :pause-recording="callback"
        :after-recording="callback"
        :select-record="callback"
        :before-upload="callback"
        :successful-upload="callback"
        :failed-upload="callback"/>
      </div>
      <div class="analyzer">
        <select v-on:change="choose" id="selector">
          <option value="1" selected>Perfect</option>
          <option value="2">Percussion</option>
          <option value="3">Piano</option>
          <option value="4">Timbales</option>
          <option value="5">TrucChelou</option>
          <option value="6">Bass2</option>
        </select>
        <av-bars audio-class="SelectInstru"
        caps-color="#FFF"
        :bar-color="['#f00', '#ff0', '#0f0']"
        canv-fill-color="#000"
        :caps-height="2"
        audio-src='/perfect.mp3'>
        </av-bars>
      </div>
    </div>
  </div>


</template>

<script>
import useSound from 'vue-use-sound'
import perfectSfx from '../assets/perfect.mp3'
import percussionSfx from '../assets/percussion.mp3'
import pianoSfx from '../assets/piano.mp3'
import timbalesSfx from '../assets/timbales.mp3'
import bassSfx from '../assets/bass.mp3'
import bass2Sfx from '../assets/bass2.mp3'

let soundRecorded = null;

export default {
  data(){
    return{
      showHasan:true,
      recorder:null,
      value:0,
      instruments:["", "/perfect.mp3", "/percussion.mp3", "/piano.mp3", "/timbales.mp3", "/bass.mp3", "/bass2.mp3"]
    }
  },
  methods:{
    choose(){
      this.value = parseInt(document.getElementById('selector').value, 10);
      console.log(this.value);
      document.querySelector(".SelectInstru").src = this.instruments[this.value];
    },
    myMethod(){
      showHasan = false
    },
    callback (data) {
      console.debug(data)
    },     
    recordAudio() {
      console.log(this.value);
      var device = navigator.mediaDevices.getUserMedia({ audio: true });
      device.then((stream) => {
        // use this!
        this.recorder = new MediaRecorder(stream);
        this.recorder.ondataavailable = (e) => {
        let blob = new Blob(e, { type: "audio/ogg" });
        soundRecorded = blob;
        };
      });
    },    
    stop() {
      this.recorder.stop() 
    }
    
  },

  setup() {
    const [playPerfect] = useSound(perfectSfx)
    const [playPercussion] = useSound(percussionSfx)
    const [playPiano] = useSound(pianoSfx)
    const [playTimbales] = useSound(timbalesSfx)
    const [playBass] = useSound(bassSfx)
    const [playBass2] = useSound(bass2Sfx)
    
    const [audio] = useSound(soundRecorded)
    
    return {
      playPerfect, playPercussion,playPiano,playTimbales,playBass,playBass2,audio,
    }
  },
}
</script>

<style scoped>
  @import "../assets/appli.css";
</style>