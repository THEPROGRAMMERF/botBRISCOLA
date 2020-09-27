const  Discord  =  require ( 'discord.js' ) ;
const  client  =  new  Discord . Client ( ) ;

// Hai scritto male; Client != Cliente

client . on ( 'ready' ,  ( )  =>  { 
	console . log ( 'Pronto!' ) ;
});

client . on ( 'message' ,  message  =>  {
	if  ( message . content  ===  '! ping' )  {
		message . channel . send ( 'Pong.' ) ;
	}
});
//PARTI DAL presupposto che non so come mettere i nomi dei giocatori e non saprei fare nemmeno la funzione che li fa sfidare
// e che ti invio il codice per capire come fare altre funzioni senza sbagliarle tutte ogni riga ♥<3 
function vincimano(carta1, carta2, p1, p2, cbris);
function estrai();
function assegnabriscola(c);
function gestisci (p);
function mescola();
function vincimano(carta1,carta2,p1,p2,cbris);
function vincita(p1,p2);
function distribuiscicarte(nom);
function mazziere(nom);
// questi sono prototipi delle funzioni spero servano a qualcosa 
Carta = {
	classe: null,
	valpunti: 0,
	valreale: 0,
	seme: 0
}
//													RICHIESTE PER ALESSIO 
//Quando trovi commenntato così ... significa che vorrei mi controllassi solo se secondo te le funzioni hanno qualcosa da migliorare 
// Quando trovi !Help logicamente mi servirebbe una mano
Mazzo=[];
//promemoria per farlo bene e farlo come dico io devo fare la srtuttura giocatore con un attributo nome e una struttura che dentro ha i parametri carte[] e punti.
let prossimacarta= 0;
//qui hai lo spazio per scrivere l'istruzione o le istruzioni per taggare gente io so solo discod.member ma non ho capito come si usa
//
//
giocatore = {
	classe:null,
	nome=null,
		mano = {
			classe:null,
			nome=null,
			carte=[],
			punti=0
		}
	
};
let fa;
let al;
let dim = 40;
let cbris;
function inizializza(){//va bene ho controllato è perfetta!

	Mazzo=new Carta[dim]; 
	for(let i=0;i<10;i++)
	{ 
		let j=1;
		if(j===1) {
		Mazzo[i]=Mazzo.valpunti=11;
		Mazzo[i+10]=Mazzo.valpunti=11;
		Mazzo[i+20]=Mazzo.valpunti=11;
		Mazzo[i+30]=Mazzo.valpunti=11;
		}
		else {
			if(j===3) {
			Mazzo[i]=Mazzo.valpunti=10;
			Mazzo[i+10]=Mazzo.valpunti=10;
			Mazzo[i+20]=Mazzo.valpunti=10;
			Mazzo[i+30]=Mazzo.valpunti=10;
			}
			else {
				if(j===8 || j===10){//algoritmo strano inventato dalla mia testa per risparmiare un if e ce la ho fatta
				Mazzo[i]=Mazzo.valpunti=Math.floor(i/3+1);
				Mazzo[i+10]=Mazzo.valpunti=Math.floor(i/3+1);
				Mazzo[i+20]=Mazzo.valpunti=Math.floor(i/3+1);
				Mazzo[i+30]=Mazzo.valpunti=Math.floor(i/3+1);
				}
				else {
					if (j===9) {
						Mazzo[i+10]=Mazzo.valpunti=3;
						Mazzo[i+20]=Mazzo.valpunti=3;
						Mazzo[i+30]=Mazzo.valpunti=3;
					}
					else {
						Mazzo[i]=Mazzo.valpunti=0;
						Mazzo[i+10]=Mazzo.valpunti=0;
						Mazzo[i+20]=Mazzo.valpunti=0;
						Mazzo[i+30]=Mazzo.valpunti=0;
					}
				}
			
			}
		Mazzo[i]=Mazzo.seme="Spade";
		Mazzo[i+10]=Mazzo.seme="Bastoni";
		Mazzo[i+20]=Mazzo.seme="Coppe";
		Mazzo[i+30]=Mazzo.seme="Denari";

		Mazzo[i]=Mazzo.valreale=i+1;
		Mazzo[i+10]=Mazzo.valreale=i+1;
		Mazzo[i+20]=Mazzo.valreale=i+1;
		Mazzo[i+30]=Mazzo.valreale=i+1;
		j++;
		
		}
	}
}
function distribuiscicarte(nom) {
	for (let i = 1; i <4; i++)
	{
		giocatore.mano.carte[i]=estrai();
	}
}
function mazziere(nom) {
	if (mano.nom.carta1== null) {
		mano.nom.carta1=estrai();
	}else{
		if (mano.nom.carta2== null) {
			mano.nom.carta2=estrai();
		}else{
			if (mano.nom.carta3== null) {
				mano.nom.carta3=estrai();
			}
			else{
				return null;
			}
		}
	}	
	return null;
}
function estrai()
{    
	while ( prossimacarta<=dim) {
		if (Mazzo[prossimacarta]!=null) {
			let c = new Carta(Mazzo[prossimacarta]);
			Mazzo[prossimacarta]=null;
    		dim--;
			return c;
		}
		else{
		prossimacarta+1;
		}
	}   
	return null;
}
function buttacarta(nome,numero) {
	if (mano.nome) {
		
	}
	
}

function assegnabriscola()
{	// questo dovrebbe essre giusto ho invertito la carta estratta con l'ultima ,dovrebbe essere giusto!(cotrolla per sicurezza)<3
	let b=Mazzo.estrai();
	cbris=b.seme;
	dim++;
	let a=Mazzo[dim-1];
	let comododo;
	comodo=b;
	b=a;
	a=comodo;
}

function gestisci (p) { //!Help sarebbero accetti consigli per capire come non confodere i player //qui dovrei ritornare il nome così perchè quando vince la mano è il primo giocatore che gioca
	return p;
}

function mescola(n)
{
	
	let x,y;
	for( i=0;i<dim;i++)
	{	
		
		do {
			x=Math.floor(Math.random() * dim);
			y=Math.floor(Math.random() * dim);
		} while (x!=y);
		
		c=new Carta(Mazzo[x]);
		Mazzo[x]=new Carta(Mazzo[y]);
		Mazzo[y]=new Carta(c);
	}
}

function vincimano(carta1,carta2,p1,p2,cbris)//qui stesso problema della funzione gestisci
{
	
	if(carta1.seme===carta2.seme){
		if(carta1.valpunti>carta2.valpunti){
			if(p1 === nome1){
				giocatore.mano.punti+=carta1.valpunti+carta2.valpunti;
			}else{

			}
			return p1;
		}else{
			if(carta1.valpunti<carta2.valpunti){
				giocatore.p2.punti+=carta1.valpunti+carta2.valpunti;//--
				return P2;
			}else{
				if(carta1.valreale>carta2.valreale){
					giocatore.p1.punti+=carta1.valpunti+carta2.valpunti;//--
					return p1;
				}else{
					giocatore.p2.punti+=carta1.valpunti+carta2.valpunti;//--
				}
			}
		}	
	}else{
		if(carta2.seme!=cbris){
			giocatore.p1+=carta1.valpunti+carta2.valpunti;//--
			return p1;
		}else {
			giocatore.p2+=carta1.valpunti+carta2.valpunti;//--
			return p2;
		}
	}
}

function vincita(p1,p2){

	if (imm1>imm2){
		console.log("Ha vinto" +p1 );	
	}else{
		if (imm1<imm2) {
			console.log("Ha vinto" +p2 );
		}else{
			console.log("Avete Pareggiato");
		}
	}
}

client . login ( "NzM2MTczMDYwOTA1ODkzOTI4.Xxq8lw.xIaGUnnrb0kPIxhyrbHSmGwwFKY ") ;
