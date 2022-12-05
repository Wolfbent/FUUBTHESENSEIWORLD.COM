const lyrics = {
    "- 'Patti'.": '"Step in the Y-3, Mixed with the YSL. They Still Hating on Me, but I see Why As Well."',
    "- 'Patti'": '"I Got To Get It, Get It through My Big Ass Head, Most em Not Loyal, Most People Won’t Break No Bread"',
    "- 'Tour Bus'": '"When It Get Hot Is Your People Gon Change ? "',
    "- 'Tour Bus'.": '"Or Better Yet Just Play Dam One Of My Songs. I can’t just do it Man, I go Beyond"',
    "- 'Tour Bus'_": '"One for the Youth, Where is the MO today ?"',
    "- 'Juxtaposed'.": '"Her Residue stay on my clothes. It stay Residence."',
    "- 'Juxtaposed''": '"The Devil want in turn. So in turn he going to tempt me. But he can never learn Cause I learned all his technique."',
    "- 'Juxtaposed'`": '"By the time they get to Surf Up on my Wave im on Jetski’s. How is he kicking down doors during Quarantine ?"',
    "- 'Juxtaposed'_": '"I want to Know, What’s more than life than Designer Clothes."',
    "- 'Juxtaposed'*": '"I can’t play Center, So I’m Centerfold"',
    "- 'Juxtaposed'..": '"Always choose your Craft, cause Chasing Ass don’t get you Nothing."',
    "- 'Juxtaposed',": '"Mommy Your Crib Coming. Your Benz, Yes It’s Coming. All this off My Audios."',
    "- '5.6.8'": '"It’s Friday, It’s my day OFF."',
    "- '5.6.8''": '"5’8 (Hitta), Big Dog Within."',
    "- '5.6.8'`": '"I’ve Done Made the Bed For You To Lay, It Does Not Come With Dirt And A Eulojay (Eulogy)"',
    "- '5.6.8'.": '"Met A Catfish, 10K On The Gram but She look like Patrick."',
    "- '5.6.8'..": '"Got Elastics. I Hit Rock Bottom, Of Course I Bounce Back Bitch."',
    "- 'Sinners'": '"Philosophy of the Streets, Socrates couldn’t Reach Us."',
    "- 'Sinners'.": '"No Pops In The Kingdom, Look What the King Done. Shit What A Bitch, I’m A Son Of."',
    "- 'Sinners'*": '"I just be Rapping on my songs like Fuck A Greatest Hits BOY. WHY? CAUSE YOU CAN’T GET THE BEST OF US."',
    "- 'The Limelight'": '"They Might Not Believe Me. I Say, I’m Rich Already Though"',
    "- 'The Limelight'.": '"That’s On My Momma I’ma Pull Up As The Main Event."',
    "- 'The Limelight'..": '"Cause Those Who Hate They Self. Can’t Be No Rival Company."',
    "- 'The Limelight',": '"I No Longer Talk The Talk, I Step In These Osweego’s"',
    "- 'Reborn'": '"Now Everybody Want To Be A Model, You Know Everybody Want To Be A Icon"',
    "- 'Reborn'.": '"Find Your Niche. Find Your Niche. Yeah That’s All That You Need, I Swear It’s All You Need. Yeah, Blood, Sweat & Tears By The Pint Indeed "',
    "- 'Reborn'*": '"You Can’t Reach Your Inner Peace In Poverty."',
    "- 'Reborn'`": '"Getting Paid For My Attention, Is What I Do For a Living"',   
}

document.getElementById('notable').addEventListener('click', () => {
    let songs = Object.keys(lyrics);
    let song = songs[Math.floor(Math.random() * songs.length)];
    let lyric = lyrics[song];

    document.getElementById('lyric').innerHTML = lyric;
    document.getElementById('song').innerHTML = song;
});