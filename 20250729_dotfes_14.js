/*
   _       _    _____           
 _| | ___ | |_ |   __| ___  ___ 
| . || . ||  _||   __|| -_||_ -|
|___||___||_|  |__|   |___||___|

music by shojiro nakaoka
_____________linktr.ee/shojironakaoka
*/
   
samples('https://shojironakaoka.github.io/strudel/strudel.json')

setcpm(100/4)


const addPattern = "[0 0 0 7 0 0 0 2  5 5 5 7 5 5 <5 7 > <2 6>  ]/64"; 
const baseScale = "<[[[E# E#] E] G]/8>:lydian";


$:n("2 ~ [ 12] ~ 9 <[ ~ 9] 9 9>/32".someCyclesBy(0.07,x=>x.off(0.25,x=>x.add(24))).when("<0 0 0 1>/24",x=>x.add(2).fast(2)))
.note("<[[[48 48] 40] 36]/8 >".add(addPattern))
.sound("2drm,zht")
.someCyclesBy(0.1,x=>x.ply("2"))
.gain(0.35)  
.when("< 0 0 0 0 0 1>/4",x=>x.sound("2vo").slow("2").gain(0.05))
.mask("<1!48 0!8 >")   
._punchcard()
$:n("[~ 21 ~ <~> ~ ~]*2".when("<0 1>/32",x=>x.add(2).fast(2)))
// .take("3 3 < 3>/16")
.note("<[[[48 60] 40] 36]/8 >".add(addPattern))
.sound("2drm,zht")
// .someCyclesBy(0.1,x=>x.off(2/12,x=>x.add(12).degradeBy(.1)))
.someCyclesBy(0.1,x=>x.ply("2"))
.mask("<1!24 0!4 1!32 0!8 >")   
.gain(0.45)
.lpf(sine.range(400, 8000).slow(11))
.lpq(sine.range(6, 10).slow(13))
._punchcard()
$:n("<15 22>")
.take("4 2 3")
.note("<[[[48 60] 40] 36]/8 >".add(addPattern))
.sound("2drm,zht")
// .someCyclesBy(0.1,x=>x.off(2/12,x=>x.add(12).degradeBy(.1)))
.someCyclesBy(0.1,x=>x.ply("2"))
.gain(0.4)
.lpf(sine.range(400, 8000).slow(11))
// .lpq(sine.range(1, 13).slow(13))
// .someCyclesBy(0.2,x=>x.gain("0"))
.when("<0 1>/48",x=>x.gain(0))
._punchcard()
let pat = 
  n("0,2,< ~ 7 ~ 6 11 13 5 7>/4"
    .add(addPattern))     
    .scale(baseScale)
    .add(
      note(perlin.range(-0.2, 0.2).slow(6)
      )
    )
    .superimpose(x => x.add(0.04));  

$:
  pat
    .ply(6)
    .attack(sine.range(0, 0.8).slow(6))
    .decay(sine.range(0.7, 1.3).slow(7))
    .sound("sawtooth")               
    .cutoff(sine.range(500, 4000).slow(8))  
    .vib(4)// freq
    .vibmod(0.2)//depth semitone
    // .someCyclesBy(0.1, x => x.delay("1:0.4:0.8"))
    .gain(saw.range(0, 0.8).slow(0.5))
    .someCyclesBy(0.11, x => x.delay("1:0.4:0.8"))
    .when("<0 1>/40",x=>x.gain(0))
    ._punchcard();
    
$: n("[0 2  7 13 5 4]" .add(addPattern))
  .scale(baseScale)  
  .take("4 2 3")
  
  .sound("saw")      
  .attack(0.08)        
  .decay(0.5)         
  .sustain(0.3)        
  .release(0.2)   
  .gain(sine.range(0, 0.6).slow(24))           
  .lpf(sine.range(200, 5000).slow(20))  
  .lpq(sine.range(1, 16).slow(18))
  .vib(4)
  .vibmod(0.2)
  .pan(sine.range(0.3, 0.7).slow(17))
  .mask("<0!8 1!24 0!16 1!16>") 
  ._punchcard()
samples('shabda/speech:dot,fes')
samples('shabda/speech:m:ドットフェス')

$: s("dot fes").speed(rand.range(0.6,1.5))
.gain(0.9)
.when("<1!16 0!4>",x=>x.gain(0))
.sometimesBy(.2, x=>x.fast("<2 3>"))

$: s("~ ~ ~  [~@15 ドットフェス]").slow(64).gain(1.1)

$: n("~ ~ < 0 ~ 0*3 ~ 0*2 > <0*6 [0*3 0*6] ~>".add("<5 9>/15"))//5 9
 .sound("2drm")
 .mask("<0!7 1>") 
 .gain(saw.range(0,0.7).fast(1))

$: n("4 ~ ~ <8? 9 11? 20? ~  24? 29? ~ 35? 65? > ~ ~")
  .note("<[[[36 36] 40] 36]/8 >".add(addPattern))
  // .slow(4)
.sound("zht")
// .cut(1)
  .gain(0.7)
 .mask("<0!12 1!8>")
.someCyclesBy(0.51, x => x.delay("0.9:0.33:0.6"))
._punchcard()


$:n("14 14").sound("zht").gain(0.6).mask("<0!22 1!8>")//41 42 51

$:n("41,70 ").sound("zht").gain(0.65)
  .note("<[[[36 36] 40] 36]/8 >".add(addPattern))
  .mask("<0!28 1!10>") //70 77
  ._punchcard()


