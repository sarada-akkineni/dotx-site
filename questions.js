// Quiz questions, shared by the quiz (index.html) and the results page.
// Changing the ORDER of questions or options changes what old answers mean: add new ones at the end instead.
// weights: a = Aarav, z = Zoya, k = Kabir. "Steady" answers carry no weight.
window.Q=[
 {q:"First question. What time did you sleep yesterday?",img:"bus",opts:[
   {t:"Before 10 PM",w:{a:2},sleep:3},
   {t:"10 to 11 PM",w:{a:1,k:1},sleep:3},
   {t:"11 PM to midnight",w:{k:2},sleep:2},
   {t:"After midnight",w:{z:2},sleep:1}]},
 {q:"Who makes sure you wake up on time?",opts:[
   {t:"Me. Alarms set.",w:{a:2}},
   {t:"Mom or Dad wakes me up.",w:{k:2}},
   {t:"Nobody. I'm often late.",w:{z:2}},
   {t:"I just wake up on my own.",w:{}}]},
 {q:"When is your brain most switched ON?",img:"rhythm",opts:[
   {t:"Early morning",s:"before school",w:{a:2},peak:"morning"},
   {t:"During school",s:"classes, free periods",w:{k:2},peak:"school"},
   {t:"After school",s:"afternoon and evening",w:{z:2},peak:"afternoon"},
   {t:"Late at night",s:"when everyone's asleep",w:{z:1},peak:"night"}]},
 {q:"9 PM. A friend messages: “Can you help me with my project? PLEASE.” Your own homework isn't done. You…",opts:[
   {t:"Say yes. They need me.",w:{a:2}},
   {t:"Say yes, then end up chatting for an hour.",w:{z:2}},
   {t:"Say “maybe” and keep worrying about both.",w:{k:2}},
   {t:"Say “Tomorrow at lunch?” and finish mine.",w:{}}]},
 {q:"Your phone buzzes while you're studying. You…",opts:[
   {t:"Check it. Someone might need me.",w:{a:2}},
   {t:"Check it. Forty minutes disappear.",w:{z:2}},
   {t:"Leave it, but keep wondering what it was.",w:{k:2}},
   {t:"Can't hear it. It's in another room.",w:{}}]},
 {q:"A big project is due in two weeks. When do you start?",opts:[
   {t:"Today. Along with three other things I promised people.",w:{a:2}},
   {t:"Tomorrow… and suddenly it's the night before.",w:{z:2}},
   {t:"When I get the perfect idea. Still waiting.",w:{k:2}},
   {t:"This week, in small pieces.",w:{}}]},
 {q:"Saturday. No school. You…",img:"gate",opts:[
   {t:"Are up early, already helping everyone.",w:{a:2}},
   {t:"Sleep till 11. Still tired.",w:{z:2}},
   {t:"Wake up, then lie in bed planning the whole day.",w:{k:2}},
   {t:"Do something I love first.",w:{}}]},
 {q:"What drains your battery the most?",img:"pillars",opts:[
   {t:"My body",s:"too little sleep, junk food, no exercise",w:{},drain:"Physical"},
   {t:"My feelings",s:"fights, worry, stress",w:{},drain:"Emotional"},
   {t:"My brain",s:"screens, noise, too many things at once",w:{},drain:"Mental"},
   {t:"My purpose",s:"doing things that don't feel like mine",w:{},drain:"Spiritual"}]},
 {q:"Last one. What charges you up?",opts:[
   {t:"Moving",s:"sports, play, a good meal",w:{},charge:"Physical"},
   {t:"People",s:"talking to people I love",w:{},charge:"Emotional"},
   {t:"Making",s:"drawing, reading, a puzzle",w:{},charge:"Mental"},
   {t:"Meaning",s:"helping someone, praying, nature",w:{},charge:"Spiritual"}]},
];
