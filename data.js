// CCNL Piloti Elicotteri - Dati strutturati
// Tasso di conversione fisso: 1 EUR = 1936.27 ITL
const LIRE_TO_EURO = 1936.27;

function lireToEuro(lire) {
  return (lire / LIRE_TO_EURO).toFixed(2);
}

function formatEuro(val) {
  return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(val);
}

function formatLire(val) {
  return 'L. ' + new Intl.NumberFormat('it-IT').format(val);
}

function convertAmount(lire) {
  const euro = lire / LIRE_TO_EURO;
  return `${formatEuro(euro)} <span class="lire-original">(${formatLire(lire)})</span>`;
}

const CCNL_DATA = {
  title: "CCNL Piloti Elicotteri",
  subtitle: "Contratto Collettivo Nazionale di Lavoro per i Piloti dipendenti da Imprese Elicotteristiche",
  date: "19 luglio 2001",
  parties: "FISE - Federazione Imprese di Servizi / ANPAC / U.P. / ASPI",
  sections: [
    {
      id: "premessa",
      title: "Premessa",
      articles: [
        {
          id: "premessa",
          number: "",
          title: "Premessa",
          content: `<p>Il presente contratto collettivo di lavoro si applica al personale addetto al comando, alla guida e al pilotaggio di elicotteri individuato nel suo complesso con la comune denominazione di <strong>Pilota</strong>, indipendentemente dalle qualifiche e dai gradi contrattualmente previste al successivo art. 4.</p>
<p>Il presente contratto ha lo scopo di favorire la massima trasparenza del rapporto diritti-doveri e la piena applicazione delle norme contrattuali al fine di raggiungere livelli sempre più elevati di sicurezza e di efficienza delle attività, in considerazione dell'obbiettivo strategico del perseguimento di un costante miglioramento della qualità del servizio, in un quadro di relazioni industriali orientate a favorire il più ampio coinvolgimento dei piloti al raggiungimento dei necessari traguardi di competitività.</p>
<p>In osservanza della normativa vigente, il presente CCNL troverà applicazione anche per gli imprenditori del settore di nazionalità estera che operano sul suolo nazionale impiegando piloti di nazionalità italiana o estera nel rispetto delle specifiche regole di reciprocità, e per i piloti di nazionalità italiana, dipendenti da società italiane, che operano all'estero, salvo le condizioni di miglior favore nel loro complesso.</p>`
        }
      ]
    },
    {
      id: "parte-generale",
      title: "1. Parte Generale",
      articles: [
        {
          id: "art-1",
          number: "1",
          title: "Assunzione",
          content: `<ol>
<li>L'assunzione dei Piloti è subordinata all'osservanza delle disposizioni legislative e regolamentari vigenti.</li>
<li>Il contratto di lavoro deve essere stipulato per iscritto e contenere le seguenti indicazioni:
<ol type="a">
<li>le generalità del Pilota;</li>
<li>la qualifica e il grado assegnato ai sensi e per gli effetti del successivo art. 4;</li>
<li>la durata dell'eventuale periodo di prova;</li>
<li>la misura della retribuzione;</li>
<li>la durata del contratto se questo è a tempo determinato;</li>
<li>la data e il luogo della stipula del contratto;</li>
<li>lo specifico richiamo al presente contratto collettivo;</li>
<li>la località di assunzione ai sensi dell'art. 29 del presente contratto.</li>
</ol></li>
<li>Prima dell'assunzione, il Pilota dovrà presentare la seguente documentazione:
<ol type="a">
<li>libretto di lavoro</li>
<li>certificato d'iscrizione all'E.N.G.A.</li>
<li>licenze ed abilitazioni possedute.</li>
</ol></li>
<li>Il Pilota comunicherà alla Compagnia, a mezzo di lettera raccomandata, la propria residenza ed, eventualmente, il proprio domicilio se non coincidente ed ogni variazione degli stessi.</li>
</ol>`
        },
        {
          id: "art-2",
          number: "2",
          title: "Periodo di prova",
          content: `<ol>
<li>L'assunzione può avvenire con un periodo di prova non superiore ai sei mesi.</li>
<li>Il periodo di prova deve risultare dalla lettera di assunzione.</li>
<li>Non sono ammesse né la protrazione né la rinnovazione del periodo di prova.</li>
<li>Durante tale periodo sussistono tra le parti tutti i diritti e tutti gli obblighi previsti dalla presente normativa; tuttavia la risoluzione del rapporto di lavoro può aver luogo ad iniziativa di ciascuna delle due parti, in qualsiasi momento, con atto scritto e senza preavviso.</li>
<li>Qualora la risoluzione del rapporto di lavoro durante il periodo di prova avvenga per dimissioni, la retribuzione è corrisposta per il solo periodo di servizio prestato; qualora invece la risoluzione del rapporto avvenga ad iniziativa della Compagnia, al Pilota sarà corrisposta la normale retribuzione mensile sino alla fine del mese in corso. Ove il rapporto venga risolto durante il periodo di prova per licenziamento, il Pilota ha diritto al pagamento del viaggio di rientro in treno (1ª classe) o in aereo (classe turistica).</li>
<li>Scaduto il periodo di prova senza che sia intervenuta la disdetta, l'assunzione del Pilota diviene definitiva e l'anzianità di servizio decorrerà a tutti gli effetti dal giorno dell'assunzione stessa.</li>
<li>La malattia e l'infortunio sospendono il periodo di prova, purché non abbiano una durata superiore al periodo di prova stesso. Il trattamento economico è dovuto soltanto qualora la malattia e l'infortunio siano insorti per causa di servizio e comunque fino alla data di scadenza del periodo di prova.</li>
</ol>`
        },
        {
          id: "art-3",
          number: "3",
          title: "Contratto a tempo determinato",
          content: `<p>Il contratto a tempo determinato è disciplinato dalla legge 18 aprile 1962 n. 230 e sue successive modifiche ed integrazioni.</p>`
        },
        {
          id: "art-4",
          number: "4",
          title: "Qualifiche e gradi",
          content: `<ol>
<li>Le qualifiche dei Piloti sono le seguenti:
<ul>
<li>Comandante</li>
<li>Pilota</li>
</ul></li>
<li>I gradi dei Piloti sono i seguenti:
<ul>
<li>Comandante Superiore</li>
<li>Primo Comandante</li>
<li>Comandante</li>
<li>Primo Ufficiale</li>
<li>Pilota di 1°</li>
<li>Pilota di 2°</li>
</ul></li>
<li>Il Pilota non può prestare servizio diverso dalla qualifica per cui è stato assunto.</li>
<li>Le funzioni di pilotaggio e di comando degli aeromobili sono assegnate esclusivamente dall'esercente, con riferimento alle licenze ed alle abilitazioni possedute dal Pilota, indipendentemente dalla qualifica e dal grado contrattuale. Pertanto il Pilota con la qualifica di Comandante potrà assolvere alle mansioni tanto di Comandante che di Pilota su ogni tipo di aeromobile su cui abbia l'abilitazione, secondo le esigenze operative della Compagnia.</li>
</ol>`
        },
        {
          id: "art-5",
          number: "5",
          title: "Passaggio di qualifica e grado",
          content: `<ol>
<li>La qualifica ed il grado vengono assegnati dalla Compagnia anche tenendo conto dei titoli professionali, dell'esperienza acquisita e delle ore di volo effettuate anche in precedenti impieghi, attenendosi anche alla lista di anzianità, laddove esistente.</li>
<li>Al Pilota che sia chiamato a sostituire un altro Pilota HEMS che abbia il diritto alla conservazione del posto a norma di legge e di contratto, verrà corrisposta la retribuzione relativa al grado di Comandante.</li>
<li>Le qualifiche e i gradi superiori verranno attribuiti alle seguenti condizioni di anzianità unitamente a tutti i requisiti professionali sotto indicati.
<p><strong>Da Pilota di 2° a Pilota di 1°:</strong></p>
<ul>
<li>12 mesi di permanenza aziendale nel grado;</li>
<li>possesso almeno di Licenza di Pilota Commerciale di Elicottero (con abilitazione IFR richiesta per i servizi TPP, OFF SHORE, HEMS).</li>
</ul>
<p><strong>Da Pilota di 1° a 1° Ufficiale:</strong></p>
<ul>
<li>2 anni di permanenza effettiva nel grado;</li>
<li>possesso della Licenza e dei requisiti di cui al punto precedente;</li>
<li>attività di volo su elicottero di almeno 1.000 ore. Per l'impiego da primo ufficiale su elicotteri plurimotore, è richiesta una esperienza minima di 200 ore su tali elicotteri.</li>
</ul>
<p><strong>Da 1° Ufficiale a Comandante:</strong></p>
<ul>
<li>l'attribuzione di tale qualifica compete alla Compagnia, in applicazione di uno dei successivi Art.li 6, 7, 8 del presente CCNL.</li>
</ul>
<p><strong>Da Comandante a Primo Comandante:</strong></p>
<ul>
<li>5 anni di anzianità nel grado;</li>
<li>licenza di pilota di linea di elicottero.</li>
</ul>
<p><strong>Da Primo Comandante a Comandante Superiore:</strong></p>
<ul>
<li>Il grado viene attribuito dalla compagnia a quei piloti che ricoprono particolari incarichi, quali Direttore Operativo, Capo pilota.</li>
</ul>
</li>
</ol>`
        },
        {
          id: "art-6",
          number: "6",
          title: "Assunzione diretta del Comandante",
          content: `<ol>
<li>Per esigenze operative, dopo aver valutato con le OOSS la possibilità o meno di impiegare il personale Pilota in forza, tenendo conto anche della lista di anzianità, la Compagnia ha facoltà di assumere Piloti per l'impiego diretto con la qualifica di Comandante in possesso dei requisiti previsti dall'art. 8, relativamente all'attività di volo.</li>
</ol>`
        },
        {
          id: "art-7",
          number: "7",
          title: "Nomina a Comandante",
          content: `<ol>
<li>Il pilota impiegato in attività di elisoccorso-HEMS, Offshore, su elicotteri dove è prescritto un solo pilota, in possesso dei requisiti previsti dall'art. 8, dopo 90 giorni di impiego effettivo, in un periodo di 5 anni, acquisisce la qualifica ed il grado di Comandante con iscrizione all'Albo tramite comunicazione formale alla ex struttura ENGA.</li>
<li>In applicazione del DPR 18 novembre 1988 n. 566 e alle norme emanate dall'Albo professionale gente dell'Aria (ENGA), la Compagnia ha facoltà di effettuare l'iscrizione all'Albo tramite comunicazione formale alla ex struttura ENGA con il titolo di Comandante:
<ol type="a">
<li>Un pilota in possesso di licenza di pilota commerciale di elicottero e che svolge le funzioni di "pilota responsabile" nei servizi di trasporto di linea e non di linea su elicotteri sui quali è prescritto un solo Pilota.</li>
<li>Un pilota in possesso di licenza di pilota di linea di elicottero e che svolge le funzioni di "Pilota Responsabile" su elicotteri impiegati nei servizi di trasporto aereo di linea e non di linea, qualunque sia l'equipaggio minimo di condotta prescritto.</li>
</ol></li>
<li>Il Pilota durante i 90 giorni di impiego previsti nel precedente comma 1 percepirà una indennità di funzione comando pari alla differenza tra il livello retributivo previsto dal proprio grado e il livello retributivo del grado di Comandante.</li>
</ol>`
        },
        {
          id: "art-8",
          number: "8",
          title: "Corso addestramento al comando",
          content: `<ol>
<li>Fatte salve le disposizioni di cui a precedenti Art. 6 e 7, può essere avviato al corso di addestramento al comando il Pilota che abbia maturato il grado di 1° Ufficiale e che sia in possesso dei seguenti requisiti: possesso della Licenza di Pilota Commerciale di elicottero o Licenza di Pilota di Linea di elicottero con abilitazione IFR richiesta per i servizi TPP, HEMS, OFF SHORE, attività di volo su elicottero di 1500 ore di cui almeno 300 su plurimotore (TPP, HEMS, OFF SHORE).</li>
<li>La posizione del candidato che non abbia superato il corso di addestramento per il comando al quale sia stato avviato per la prima volta, sarà ripresa in esame ai fini di un secondo e definitivo avvio al corso di addestramento per il comando e sempre che se ne presenti l'occasione non prima di un anno dalla data della prima esclusione.</li>
<li>La rinuncia del Pilota all'avvio al corso di addestramento per il comando non viene considerata prova negativa, qualora l'interessato informi delle proprie decisioni l'Azienda entro 15 giorni dalla comunicazione riguardante la sua idoneità all'avvio al corso comando.</li>
<li>L'idoneità all'accesso al corso comando, fatti salvi i concetti professionali esposti, è regolato dalla lista di anzianità aziendale, laddove esistente.</li>
<li>Le modalità di svolgimento del corso comando sono determinate in sede aziendale e devono essere allegate, così come previsto dalle disposizioni di legge, al manuale operativo della Società.</li>
</ol>`
        },
        {
          id: "art-9",
          number: "9",
          title: "Aggiornamento Professionale",
          content: `<ol>
<li>La Compagnia avrà cura di offrire, per quanto possibile, pari opportunità di miglioramento delle qualifiche, ai propri Piloti.</li>
</ol>`
        },
        {
          id: "art-10",
          number: "10",
          title: "Lista di anzianità",
          content: `<ol>
<li>La lista di anzianità potrà essere eventualmente definita in sede sindacale e in quelle aziende dove vi siano almeno 5 Piloti in organico.</li>
<li>Ove istituita essa dovrà essere pubblicata e regolare il passaggio del Pilota alle varie qualifiche ed essere applicata, compatibilmente con le vigenti disposizioni di legge, in caso di riduzione del personale e/o riassunzioni e dovrà essere articolata secondo il seguente schema: la lista di anzianità aziendale, ove istituita, regola la posizione di ogni singolo dipendente rispetto agli altri, e deve essere obbligatoriamente utilizzata, per la determinazione dei passaggi di grado, per l'assegnazione della funzione di comando, per l'individuazione del personale avente diritto a conseguire ulteriori qualifiche professionali, per determinare l'incarico di comando a bordo dell'aeromobile tra pari grado, per i licenziamenti individuali o collettivi, per le riassunzioni, con la sola esclusione dei licenziati per motivi disciplinari.</li>
<li>La lista d'anzianità è composta dalla sommatoria di tutti i periodi in cui il lavoratore è stato alle dipendenze dell'Azienda, anche se in tempi non consecutivi. Tra due Piloti, a parità di periodi di servizio svolti, si reputerà più anziano colui che vanta la maggior età anagrafica.</li>
<li>La lista d'anzianità preparata dalla Compagnia con la partecipazione delle OO.SS. deve essere aggiornata annualmente al 31 Gennaio. Inoltre, ad ogni nuova assunzione e ad ogni passaggio di grado dovrà essere riformulata. Sarà compito della Compagnia consegnarne, contestualmente all'avvenuta stesura, copia originale alla R.S.A. ed inviarla, entro un massimo di 7 giorni, a tutti i Piloti, nonché alle OO.SS. firmatarie del CCNL.</li>
<li>L'aspettativa, a qualsiasi titolo imputata, non influisce sulla propria posizione nella lista d'anzianità, che continua ad avanzare autonomamente.</li>
</ol>`
        },
        {
          id: "art-11",
          number: "11",
          title: "Investimenti/Innovazioni tecnico-organizzative",
          content: `<ol>
<li>La Compagnia esporrà, entro il primo quadrimestre di ogni anno, alle organizzazioni sindacali dei Piloti ed alle rappresentanze sindacali aziendali, nel corso di un apposito incontro, le prospettive produttive nei programmi di investimento, nonché le prevedibili implicazioni sulla occupazione e le condizioni di lavoro.</li>
<li>Analoga esposizione verrà effettuata dalla Compagnia, anche a richiesta delle organizzazioni sindacali dei Piloti, qualora si verificassero, nel corso dell'anno, aggiornamenti significativi di tali programmi.</li>
<li>Nel caso di innovazioni tecnico-organizzativo che comportino sostanziali modifiche all'assetto produttivo (per esempio, introduzione di nuove tecnologie, rilevanti modifiche degli impianti, immissione di nuovi tipi di elicotteri, ecc.), ne sarà data dalla Compagnia preventiva comunicazione alle organizzazioni dei Piloti ed alle corrispondenti rappresentanze sindacali aziendali, cui potrà far seguito, a richiesta di una delle parti da avanzarsi entro 5 giorni, un incontro per l'esame della materia in ordine ai riflessi sull'occupazione e sulle condizioni di lavoro. Tale esame – salvo diversi accordi raggiunti tra le parti – dovrà essere condotto nei 10 giorni successivi alla richiesta stessa.</li>
<li>La Compagnia non darà luogo alle modifiche suddette prima che sia espletata la procedura di cui sopra.</li>
</ol>`
        },
        {
          id: "art-12",
          number: "12",
          title: "Osservatorio Nazionale tra FISE - ANPAC e UP",
          content: `<ol>
<li>L'Osservatorio Nazionale è costituito in adempimento a quanto stabilito dalle intese contrattuali nazionali e svolge, senza alcun fine di lucro, quanto ad esso demandato dalle parti costituenti.</li>
<li>L'Osservatorio ha potere deliberante nei propri ambiti di competenza.</li>
<li>L'Osservatorio ha sede in Roma e l'indirizzo viene fissato presso l'Associazione del presidente.</li>
<li>L'osservatorio è costituito da 8 membri che durano in carica un triennio e possono essere riconfermati.</li>
<li>I componenti dell'Osservatorio sono nominati in misura paritetica dalle Organizzazioni imprenditoriali e da quelle Sindacali dei lavoratori (in proporzione al numero degli iscritti), stipulanti il contratto collettivo per il settore.</li>
<li>Il Presidente è nominato su designazione delle Organizzazioni Imprenditoriali e durerà in carica due anni.</li>
<li>Il Vice-Presidente è nominato su designazione delle Organizzazioni Sindacali dei Piloti e durerà in carica due anni.</li>
<li>Compiti dell'Osservatorio sono:
<ul>
<li>vigilare sul corretto comportamento degli operatori e dei lavoratori del settore, con il più generale obbiettivo di perseguire la più ampia applicazione dei contratti collettivi di lavoro e la più concreta ottemperanza alle vigenti disposizioni di legge;</li>
<li>promuovere azioni atte a migliorare la sicurezza del settore;</li>
<li>vigilare sulla corretta applicazione delle norme di legge, di regolamento e di contratto da parte degli enti committenti;</li>
<li>effettuare monitoraggi, studi ed analisi dell'andamento del mercato, degli appalti e dell'occupazione;</li>
<li>ricercare strumenti e regole per il rispetto generalizzato delle norme del CCNL e delle relative intese integrative.</li>
</ul></li>
<li>L'Osservatorio potrà sentire eventuali interessati e/o comunque coinvolti nelle varie questioni.</li>
<li>L'Osservatorio potrà elaborare studi di orientamento sulle metodologie e organizzazione del lavoro.</li>
<li>Spetta al Presidente: rappresentare l'Osservatorio di fronte ai terzi ed in giudizio; presiedere le adunanze; sovraintendere, di concerto con il Vice-Presidente, all'applicazione del presente regolamento; promuovere l'esecuzione delle deliberazioni.</li>
<li>L'Osservatorio, di norma, si riunisce una volta al mese ed, in via straordinaria, ogni qualvolta sia richiesto da almeno 1/3 dei componenti effettivi. La convocazione è fatta anche a mezzo fax almeno 7 giorni prima della data fissata per la riunione. In caso di urgenza il termine potrà essere ridotto a 48 ore.</li>
<li>Le decisioni dell'Osservatorio sono prese a maggioranza assoluta dei presenti. Ciascun componente ha diritto ad un voto e non sono ammesse deleghe.</li>
<li>Delle riunioni viene redatto un verbale in triplice originale.</li>
<li>I membri dell'osservatorio sono tenuti ad osservare il massimo riserbo su tutto quanto forma oggetto delle proprie funzioni.</li>
</ol>`
        },
        {
          id: "art-13",
          number: "13",
          title: "Responsabilità Civile e/o Penale",
          content: `<ol>
<li>Al comandante dell'aeromobile che, per motivi professionali, sia coinvolto in procedimenti civili o penali, per fatti riguardanti terzi estranei alla Compagnia, direttamente connessi con l'esercizio delle funzioni svolte, da parte della Compagnia sarà garantita dalla fase iniziale del procedimento l'assistenza legale nonché l'eventuale pagamento delle spese legali e giudiziarie e risarcitorie.</li>
<li>La tutela di cui al precedente comma è esclusa nei casi di dolo o colpa grave del Comandante accertati con sentenza passata in giudicato.</li>
</ol>`
        },
        {
          id: "art-14",
          number: "14",
          title: "Condizioni di miglior favore",
          content: `<ol>
<li>Il presente contratto, le cui disposizioni sono correlate ed inscindibili tra di loro nell'ambito di ciascun istituto, fa salve le condizioni di miglior favore, comunque costituitesi fra la Compagnia ed il Pilota.</li>
</ol>`
        },
        {
          id: "art-15",
          number: "15",
          title: "Pari opportunità",
          content: `<ol>
<li>Le parti confermano la più ampia disponibilità, in armonia a quanto previsto dalla normativa vigente in merito, a definire norme pratiche attuative concernenti personale femminile appartenente alla categoria dei Piloti, ferma restando la piena operatività nei confronti di detto personale di tutte le normative di carattere contrattuale in essere.</li>
</ol>`
        }
      ]
    },
    {
      id: "parte-economica",
      title: "2. Parte Economica",
      articles: [
        {
          id: "art-16",
          number: "16",
          title: "Stipendi minimi contrattuali",
          content: `<ol>
<li>Gli stipendi minimi contrattuali mensili lordi, comprensivi dell'indennità di contingenza, riguardanti ciascuna qualifica e grado, sono quelli di cui alla tabella al comma 2.</li>
<li>Tabella:
<div class="table-responsive"><table class="salary-table">
<thead><tr><th>Grado</th><th>Stipendio Minimo</th><th>Aumenti rispetto CCNL 25/06/98</th></tr></thead>
<tbody>
<tr><td>Comandante Superiore</td><td>${convertAmount(2759461)}</td><td>${convertAmount(482461)}</td></tr>
<tr><td>Primo Comandante</td><td>${convertAmount(2593846)}</td><td>${convertAmount(453846)}</td></tr>
<tr><td>Comandante</td><td>${convertAmount(2432846)}</td><td>${convertAmount(425846)}</td></tr>
<tr><td>1° Ufficiale</td><td>${convertAmount(2121846)}</td><td>${convertAmount(372846)}</td></tr>
<tr><td>Pilota di 1°</td><td>${convertAmount(2036538)}</td><td>${convertAmount(358538)}</td></tr>
<tr><td>Pilota di 2°</td><td>${convertAmount(1936384)}</td><td>${convertAmount(346384)}</td></tr>
<tr><td>Salario di ingresso</td><td>${convertAmount(1936384)}</td><td>${convertAmount(346384)}</td></tr>
</tbody>
</table></div></li>
</ol>`
        },
        {
          id: "art-17",
          number: "17",
          title: "Indennità di contingenza",
          content: `<ol>
<li>L'indennità di contingenza in vigore alla firma del presente CCNL riguardante ciascuna qualifica e grado è quella di cui alla tabella al comma 2.</li>
<li>Tabella:
<div class="table-responsive"><table class="salary-table">
<thead><tr><th>Grado</th><th>Indennità di Contingenza</th></tr></thead>
<tbody>
<tr><td>Comandante Superiore</td><td>${convertAmount(1037000)}</td></tr>
<tr><td>Primo Comandante</td><td>${convertAmount(1024000)}</td></tr>
<tr><td>Comandante</td><td>${convertAmount(1015000)}</td></tr>
<tr><td>Primo Ufficiale</td><td>${convertAmount(1005000)}</td></tr>
<tr><td>Pilota di 1°</td><td>${convertAmount(996000)}</td></tr>
<tr><td>Pilota di 2°</td><td>${convertAmount(970000)}</td></tr>
<tr><td>Salario di ingresso</td><td>${convertAmount(970000)}</td></tr>
</tbody>
</table></div></li>
</ol>`
        },
        {
          id: "art-18",
          number: "18",
          title: "Indennità di volo",
          content: `<ol>
<li>Mensilmente la Compagnia corrisponderà al Pilota un importo garantito pari a sessanta (60) ore di indennità di volo, in funzione della qualifica e del grado.</li>
<li>La misura oraria della stessa è quella indicata dalla tabella al comma 4.</li>
<li>Detta indennità verrà corrisposta anche durante il periodo di ferie, di malattia e di infortunio.</li>
<li>Tabella:
<div class="table-responsive"><table class="salary-table">
<thead><tr><th>Grado</th><th>Aliquota Oraria</th><th>Aumenti rispetto CCNL 25/06/98</th></tr></thead>
<tbody>
<tr><td>Comandante Superiore</td><td>${convertAmount(72147)}</td><td>${convertAmount(12622)}</td></tr>
<tr><td>Primo Comandante</td><td>${convertAmount(71574)}</td><td>${convertAmount(12524)}</td></tr>
<tr><td>Comandante</td><td>${convertAmount(70933)}</td><td>${convertAmount(12418)}</td></tr>
<tr><td>1° Ufficiale</td><td>${convertAmount(52632)}</td><td>${convertAmount(9252)}</td></tr>
<tr><td>Pilota di 1°</td><td>${convertAmount(46018)}</td><td>${convertAmount(8103)}</td></tr>
<tr><td>Pilota di 2°</td><td>${convertAmount(36624)}</td><td>${convertAmount(6469)}</td></tr>
<tr><td>Salario di ingresso</td><td>${convertAmount(16543)}</td><td>${convertAmount(2958)}</td></tr>
</tbody>
</table></div></li>
</ol>`
        },
        {
          id: "art-19",
          number: "19",
          title: "Indennità integrativa di volo",
          content: `<ol>
<li>Per ogni ora di volo effettuata dal Pilota, con esclusione delle ore di addestramento per il pilota, verranno riconosciuti gli importi lordi orari di cui alla tabella al comma 6 per un minimo di 200 ore di volo in un anno.</li>
<li>Nel mese di dicembre in concomitanza con la corresponsione della 13ª mensilità la Compagnia corrisponderà l'indennità pari a 100 ore.</li>
<li>Con le competenze del mese di marzo, sempre a titolo di indennità integrativa di volo, la Compagnia corrisponderà l'indennità pari ad altre 100 ore, più eventuali conguagli dovuti nel caso in cui il Pilota abbia svolto dal 1 gennaio al 31 dicembre del precedente anno un'attività di volo superiore alle 200 ore.</li>
<li>Nel caso di inizio o cessazione del rapporto di lavoro nel corso dell'anno l'indennità integrativa di volo verrà corrisposta con eventuale riproporzionamento a ratei sul valore totale di 200 ore.</li>
<li>Detta indennità verrà corrisposta anche durante il periodo di ferie, di malattia e di infortunio.</li>
<li>Tabella:
<div class="table-responsive"><table class="salary-table">
<thead><tr><th>Grado</th><th>Aliquota Oraria</th><th>Aumenti rispetto CCNL 25/06/98</th></tr></thead>
<tbody>
<tr><td>Comandante Superiore</td><td>${convertAmount(40840)}</td><td>${convertAmount(7140)}</td></tr>
<tr><td>Primo Comandante</td><td>${convertAmount(40240)}</td><td>${convertAmount(7040)}</td></tr>
<tr><td>Comandante</td><td>${convertAmount(39515)}</td><td>${convertAmount(6915)}</td></tr>
<tr><td>1° Ufficiale</td><td>${convertAmount(37125)}</td><td>${convertAmount(6525)}</td></tr>
<tr><td>Pilota di 1°</td><td>${convertAmount(35925)}</td><td>${convertAmount(6325)}</td></tr>
<tr><td>Pilota di 2°</td><td>${convertAmount(30975)}</td><td>${convertAmount(5475)}</td></tr>
<tr><td>Salario di ingresso</td><td>${convertAmount(8890)}</td><td>${convertAmount(1590)}</td></tr>
</tbody>
</table></div></li>
</ol>`
        },
        {
          id: "art-20",
          number: "20",
          title: "Aumenti periodici di anzianità",
          content: `<ol>
<li>Il Pilota ha diritto per tutto il corso della carriera a n. 10 (dieci) aumenti biennali del 5% sulla retribuzione sul livello di appartenenza riferite alle tabelle relative a: minimo; contingenza; indennità di volo; indennità integrativa di volo. Gli aumenti decorrono dal 1° del mese successivo al compimento del biennio.</li>
<li>In caso di promozione da una qualifica all'altra o da un grado all'altro, il Pilota conserva in cifra gli aumenti di anzianità maturati ed il nuovo scatto sarà commisurato a quello della qualifica o del grado posseduti al momento della maturazione.</li>
<li>Gli attuali scatti maturati saranno congelati come superminimo ad personam non assorbibile.</li>
<li>Il periodo maturato dall'ultimo scatto sarà utile per le erogazioni del nuovo primo scatto.</li>
</ol>`
        },
        {
          id: "art-21",
          number: "21",
          title: "Indennità di volo notturno",
          content: `<ol>
<li>Al pilota impiegato nel turno di notte nei servizi H24 compete un'indennità di volo notturno per ogni ora di volo effettuata.</li>
<li>La misura di base della stessa è pari al 16% della indennità di volo oraria di cui alla tabella al comma 4 art. 18, con un minimo garantito di 6 ore di volo per ogni notte, salvo diversi accordi di miglior favore in sede aziendale.</li>
</ol>`
        },
        {
          id: "art-22",
          number: "22",
          title: "Indennità di volo addestrativa",
          content: `<ol>
<li>Ai Piloti Istruttori o Controllori la compagnia corrisponderà mensilmente una indennità di volo addestrativa per ogni ora di volo svolta in qualità di Istruttore o Controllore pari a ${convertAmount(100000)}, salvo diversi accordi di miglior favore a livello aziendale.</li>
</ol>`
        },
        {
          id: "art-23",
          number: "23",
          title: "Indennità di volo aggiuntiva",
          content: `<ol>
<li>L'indennità di volo aggiuntiva è una eventuale componente addizionale dello stipendio che potrà essere determinata in sede Aziendale nell'ambito degli Accordi integrativi ovvero con accordo diretto con il Pilota, allo scopo di consentire una maggior armonizzazione, anche economica, dei trattamenti in atto nelle singole realtà aziendali con quanto stabilito dal presente CCNL.</li>
<li>Detta indennità, laddove istituita, sarà corrisposta anche durante il periodo di ferie, malattia o infortunio.</li>
</ol>`
        },
        {
          id: "art-24",
          number: "24",
          title: "Indennità di disagio",
          content: `<ol>
<li>Al Pilota per ogni turno di servizio programmato, a prescindere dalla durata dello stesso, verrà corrisposta mensilmente una indennità di disagio, da determinarsi in sede di trattativa aziendale con la RSA, in funzione della distanza dalla residenza alla base, al fine di compensare il tempo impiegato dal pilota per raggiungere la base stessa.</li>
<li>Per le Aziende che hanno già definito l'elemento di cui al presente articolo restano invariati i valori in essere.</li>
</ol>`
        },
        {
          id: "art-25",
          number: "25",
          title: "Maggiorazione per lavoro festivo",
          content: `<ol>
<li>Il Pilota in servizio nelle festività riportate nel successivo comma 2 spetta una maggiorazione della retribuzione pari al 20% della retribuzione giornaliera calcolata dividendo la retribuzione lorda complessiva annuale per 183.</li>
<li>Sono considerati giorni festivi: il 1° giorno dell'anno, l'Epifania, il 25 Aprile, il lunedì dopo Pasqua, il 1° maggio, il giorno dell'Assunzione, il giorno di Ognissanti, il giorno della Immacolata Concezione, il giorno di Natale, il 26 Dicembre.</li>
</ol>`
        },
        {
          id: "art-26",
          number: "26",
          title: "Indennità per servizio straordinario",
          content: `<ol>
<li>Al Pilota impiegato in servizio straordinario così come previsto dagli art.li 44 e 46 verrà corrisposta una indennità giornaliera pari alla retribuzione giornaliera calcolata dividendo la retribuzione lorda complessiva annuale per 183 e aumentata del 50%.</li>
<li>Per i Piloti che alla data di stipula del presente CCNL abbiano giornate contrattuali di impiego pari a 190 o 200, l'indennità di cui al comma precedente verrà calcolata dividendo la retribuzione lorda complessiva annuale per 190 e 200.</li>
</ol>`
        },
        {
          id: "art-27",
          number: "27",
          title: "Tredicesima mensilità",
          content: `<ol>
<li>La Compagnia corrisponderà al Pilota, entro il 20 dicembre di ciascun anno, una tredicesima mensilità costituita dal minimo contrattuale, dagli aumenti periodici di anzianità, dall'indennità di contingenza, dall'eventuale indennità di volo aggiuntiva, da eventuali super minimi e/o assegni ad personam.</li>
<li>In caso di inizio o di cessazione del rapporto di lavoro nel corso dell'anno, il Pilota ha diritto, superato il periodo di prova a tanti dodicesimi di tredicesima mensilità quanti sono i mesi di servizio prestato. La frazione di mese pari o superiore a 15 giorni viene computata come mese intero.</li>
</ol>`
        },
        {
          id: "art-28",
          number: "28",
          title: "Salario d'ingresso",
          content: `<p>Al fine di favorire l'inserimento dei giovani all'interno di un mercato del lavoro particolarmente selettivo, il pilota che abbia meno di 500 ore di volo verrà assunto con la qualifica di Pilota di 2° e gli verrà corrisposta per 2 anni la retribuzione di cui alla tabella allegata al presente CCNL, alla voce "Salario di ingresso".</p>
<p>Qualora, nel caso sopra esposto, il Pilota dovesse raggiungere prima del 24° mese il limite delle 500 ore di volo, da quel momento percepirà dal 1° mese o dal mese successivo (frazione 15 giorni) l'intera retribuzione relativa al proprio livello.</p>`
        },
        {
          id: "art-29",
          number: "29",
          title: "Sede di lavoro",
          content: `<p>La sede di lavoro è individuata nel contratto d'assunzione, ed è coincidente con la base d'armamento della compagnia.</p>`
        },
        {
          id: "art-30",
          number: "30",
          title: "Trasferte",
          content: `<ol>
<li>Il Pilota chiamato a svolgere la sua attività lavorativa in un luogo diverso da quello di assunzione ha diritto alla rifusione delle spese sostenute a piè di lista e/o forfettariamente secondo le disposizioni di legge vigenti. Le relative modalità verranno concordate a livello aziendale con le rispettive RSA.</li>
<li>I Piloti impiegati in attività HEMS o OFFSHORE hanno diritto al seguente trattamento minimo:
<p><strong>A) Viaggio</strong><br>
La compagnia rimborserà le spese sostenute dal Pilota, dalla propria residenza per raggiungere nel più breve tempo possibile la base operativa, tramite aereo, treno in prima classe, piroscafo, auto personale. Il rimborso spese per l'uso dell'autovettura personale è pari a ${convertAmount(600)} per ogni Km, oltre alle spese autostradali documentate.</p>
<p><strong>B) Alloggio</strong><br>
Presso tutte le basi operative di HEMS e OFFSHORE, la Compagnia fornirà l'alloggio in albergo di almeno 3 stelle o superiore, o in alternativa un appartamento/residence per ogni singolo componente dell'equipaggio. Al Pilota che dovesse rinunciare al trattamento di alloggio spetterà un'indennità forfetaria giornaliera pari a ${convertAmount(30000)}.</p>
<p><strong>C) Vitto</strong><br>
Data la particolare attività svolta con continuità fino a 13 ore giornaliere, al Pilota spetta una diaria forfettaria pari a ${convertAmount(60000)}.</p>
<p><strong>D) Auto di servizio</strong><br>
Per il Pilota in trasferta cui compete l'indennità di trasferta ha diritto ad avere rimborsato le spese di viaggio tra la base e l'alloggio di servizio.</p></li>
<li>I trattamenti di miglior favore in atto eventualmente già esistenti a livello aziendale restano confermati e si intendono estesi anche per i neo-assunti.</li>
</ol>`
        },
        {
          id: "art-31",
          number: "31",
          title: "Trasferta estera",
          content: `<ol>
<li>Al pilota impiegato al di fuori del territorio Italiano compete il medesimo trattamento di trasferta previsto dal precedente art. 30 comma 2, con una rivalutazione degli importi da concordare in sede aziendale con la RSA.</li>
</ol>`
        },
        {
          id: "art-32",
          number: "32",
          title: "Trasferimento",
          content: `<ol>
<li>La sede di lavoro nei termini individuati nell'art. 29 potrà essere variata, a titolo non temporaneo, nel corso del rapporto lavorativo, a seconda delle esigenze della Compagnia ed i trasferimenti avverranno solo a seguito di un accordo con il pilota, con pagamento di un'apposita indennità da concordare a livello aziendale.</li>
<li>Saranno a totale carico della Compagnia le seguenti spese derivanti dal suddetto trasferimento:
<ol type="a">
<li>Le spese di trasloco della mobilia e degli effetti personali del dipendente e dei suoi familiari conviventi;</li>
<li>Le spese di viaggio, in prima classe ferroviaria o in classe turistica aerea, dell'intero nucleo familiare convivente;</li>
<li>Il pagamento di una somma a titolo di risarcimento per il disagio arrecato, pari a due volte la retribuzione intera mensile.</li>
</ol></li>
</ol>`
        },
        {
          id: "art-33",
          number: "33",
          title: "Trattamento economico e pagamento competenze",
          content: `<ol>
<li>La retribuzione del pilota è quella risultante dall'applicazione degli istituti economici contrattuali come stabiliti dal presente CCNL.</li>
<li>Le retribuzioni dei dipendenti dovranno essere pagate, con valuta e disponibilità entro e non oltre il giorno 10 del mese successivo a cui si riferiscono. Qualora i pagamenti subiscano ritardo, dovranno essere maggiorati degli interessi, fissati nella misura del tasso ufficiale di sconto maggiorato del 5%. Tuttavia il Pilota che non abbia ricevuto la retribuzione entro 15 giorni dal predetto termine, potrà risolvere immediatamente e senza preavviso il rapporto di lavoro, con il diritto alla corresponsione aggiuntiva da parte della Compagnia, a titolo risarcitorio, oltre del T.F.R. della indennità di mancato preavviso.</li>
</ol>`
        }
      ]
    },
    {
      id: "parte-normativa",
      title: "3. Parte Normativa",
      articles: [
        {
          id: "art-34",
          number: "34",
          title: "Assenze ed aspettative",
          content: `<p><strong>a) Assenze</strong><br>
Nel caso di assenza per legittimo impedimento, questa deve essere tempestivamente comunicata telefonicamente o a mezzo telegramma/fax alla Compagnia per la sostituzione del Pilota.</p>
<p><strong>b) Aspettativa non retribuita</strong><br>
Il pilota, per gravi esigenze di carattere personale, avrà diritto, su sua richiesta, ad essere posto in aspettativa non retribuita per una durata massima di 6 mesi continuativi.</p>
<ol>
<li>L'aspettativa non potrà essere rifiutata salvo motivate esigenze di servizio.</li>
<li>L'aspettativa non sarà retribuita a nessun effetto di legge e di contratto e sospenderà l'efficacia di tutti gli istituti contrattuali per un periodo corrispondente alla sua durata.</li>
<li>Il pilota in aspettativa conserva il suo posto in lista di anzianità (ove definita).</li>
<li>Nel caso di licenziamenti per riduzione del personale, la lista di anzianità sarà pienamente operante anche nei confronti del Pilota posto in aspettativa.</li>
<li>Al rientro del lavoratore assentatosi per aspettativa, la compagnia si prodigherà per reinserirlo prontamente tra il personale di volo. Le spese derivanti dal mantenimento del brevetto o dalla eventuale reintegrazione saranno anticipate totalmente dalla Compagnia, e successivamente trattenute ratealmente dalla retribuzione, fino al concorso del 50% quota posta a carico del dipendente.</li>
</ol>`
        },
        {
          id: "art-35",
          number: "35",
          title: "Congedo matrimoniale",
          content: `<ol>
<li>Senza pregiudizio del periodo feriale, il Pilota avrà diritto di fruire di un periodo di congedo di 15 giorni di calendario per contrarre matrimonio dandone preavviso alla Compagnia di almeno 30 giorni.</li>
<li>Durante tale periodo la Compagnia corrisponderà al pilota la normale retribuzione.</li>
</ol>`
        },
        {
          id: "art-36",
          number: "36",
          title: "Trattamento di malattia ed infortunio",
          content: `<p><strong>A) Malattia, inidoneità, infortunio dipendenti da causa di servizio</strong></p>
<ol>
<li>Il Pilota ha diritto al rimborso delle spese di cura per quanto non facente carico all'Ente che presta l'assistenza di malattia.</li>
<li>Alla normale retribuzione ed alle indennità di volo garantite sino alla guarigione completa non oltre un periodo massimo di 12 mesi.</li>
<li>Trascorso il periodo di 12 mesi, il Pilota, perdurando la malattia, avrà diritto alla conservazione del posto per un ulteriore periodo di 12 mesi senza alcuna retribuzione, ma con maturazione della sola anzianità.</li>
<li>Al termine di questo secondo periodo, la Compagnia ha la facoltà di risolvere il rapporto di lavoro corrispondendo al Pilota l'indennità di mancato preavviso ed il TFR.</li>
</ol>
<p><strong>B) Malattia, inidoneità temporanea, infortunio non dipendenti da cause di servizio</strong></p>
<ol>
<li>Il Pilota ha diritto alla conservazione del posto qualora, nell'arco di 36 mesi, raggiunga un periodo complessivo di assenza pari a 12 mesi.</li>
<li>Il Pilota ha diritto alla corresponsione della retribuzione e delle indennità di volo garantite per i primi 8 mesi ed alla metà della retribuzione e delle indennità di volo garantite per i successivi 4 mesi.</li>
<li>Trascorso il periodo dei 12 mesi, perdurando la malattia o infortunio, il Pilota avrà diritto, a richiesta, alla conservazione del posto per un ulteriore periodo di 12 mesi, senza retribuzione ma con maturazione della sola anzianità.</li>
</ol>`
        },
        {
          id: "art-37",
          number: "37",
          title: "Assenze per malattia/infortunio",
          content: `<p>Le giornate di malattia, che cadono nel turno di servizio programmato, sono considerate servizio effettivo.</p>
<p>L'assenza per infermità da malattia/infortunio deve essere comunicata alla Compagnia immediatamente non appena insorga lo stato d'infermità, sia all'inizio che in caso di eventuale prosecuzione.</p>
<p>Il Pilota è tenuto ad inviare il relativo certificato medico di giustificazione entro il secondo giorno dall'inizio della malattia/infortunio o dalla sua eventuale prosecuzione.</p>
<p>Il Pilota assente per malattia/infortunio è tenuto, fin dal primo giorno di assenza dal lavoro, a trovarsi nel domicilio comunicato all'Azienda, in ciascun giorno, anche se domenicale o festivo, dalle ore 10.00 alle ore 12.00 e dalle 17.00 alle ore 19.00.</p>`
        },
        {
          id: "art-38",
          number: "38",
          title: "Assunzione del Pilota tra il personale non navigante",
          content: `<ol>
<li>Il Pilota non più idoneo al servizio di volo, anche per causa di malattia, ha diritto ad essere interpellato e, qualora in possesso dei requisiti richiesti, preferito nelle assunzioni di posti per il personale non navigante, per la durata di 3 anni dalla data di risoluzione del suo rapporto di lavoro.</li>
<li>In caso di assunzione tra il personale non navigante, il Pilota ha diritto al normale trattamento di fine rapporto, con applicazione di una nuova normativa diversa dalla presente.</li>
</ol>`
        },
        {
          id: "art-39",
          number: "39",
          title: "Previdenza",
          content: `<ol>
<li>Il personale di volo deve essere iscritto, in costanza della normativa vigente, all'apposito Fondo Volo, gestito dall'INPS, con la qualifica competente. L'iscrizione al suddetto Fondo è indipendente dalla qualifica dell'esercente aereo. Inoltre, il personale di volo, nello svolgimento delle funzioni proprie, opera esclusivamente in qualità di lavoratori dipendenti e non può essere inquadrato diversamente nemmeno ai fini pensionistici.</li>
<li>Il trattamento di previdenza dei piloti, fornito dall'INPS-Fondo Volo, è disciplinato dalla Legge 13.07.1965 n. 859 e successive modifiche.</li>
</ol>`
        },
        {
          id: "art-40",
          number: "40",
          title: "Previdenza integrativa",
          content: `<ol>
<li>In coerenza con i principi della riforma del sistema pensionistico si conviene di dar vita ad un fondo nazionale di previdenza complementare, attraverso l'adesione al costituendo fondo di previdenza integrativa dei piloti Alitalia e Meridiana (PREVIVOLO).</li>
<li>Il fondo che sarà basato sul principio della volontarietà dell'adesione da parte dei Piloti, funzionerà secondo il sistema della capitalizzazione dei versamenti individuali.</li>
<li>La contribuzione è stabilita nel 2% della retribuzione utile ai fini del calcolo del TFR, nel limite di ${convertAmount(2500000)}, a carico sia delle aziende che del pilota in forma paritetica.</li>
<li>A partire dal 1 gennaio 2001 verrà versato al fondo l'intera quota del TFR maturando dal Pilota che ha aderito al fondo.</li>
</ol>`
        },
        {
          id: "art-41",
          number: "41",
          title: "Preavviso di licenziamento e dimissioni",
          content: `<ol>
<li>Fatto salvo quanto previsto dall'articolo sui licenziamenti individuali, il rapporto di lavoro a tempo indeterminato può essere risolto da una delle due parti contraenti purché questa ne dia regolare preavviso all'altra.</li>
<li>Superato il periodo di prova, se la risoluzione avviene ad opera della Compagnia, il termine di preavviso deve essere di 4 mesi per il Pilota e di 6 mesi per il Direttore Operativo.</li>
<li>Se la risoluzione avviene per dimissioni del Pilota o del Direttore Operativo, i termini di cui al comma precedente sono ridotti alla metà.</li>
<li>Il preavviso non deve essere osservato quando l'altra parte abbia dato giusta causa alla risoluzione immediata del rapporto.</li>
<li>I termini di disdetta decorrono dalla metà o dalla fine di ciascun mese: tanto il licenziamento quanto le dimissioni devono essere comunicate per iscritto.</li>
<li>Ove una delle parti risolva il rapporto di lavoro senza il rispetto dei termini di preavviso, i termini stessi devono essere sostituiti da un'indennità pari alla normale retribuzione integrata dall'indennità di volo garantita.</li>
<li>Il periodo di preavviso, anche se sostituito dalla corrispondente indennità, è computato nell'anzianità agli effetti del TFR.</li>
<li>L'indennità di mancato preavviso, quando dovuta, deve essere liquidata dalla Compagnia entro 15 giorni dalla cessazione del servizio.</li>
</ol>`
        },
        {
          id: "art-42",
          number: "42",
          title: "Trattamento di fine rapporto",
          content: `<ol>
<li>In caso di risoluzione del rapporto di lavoro al Pilota spetta l'indennità di fine rapporto disciplinata dalla legge 29 maggio 1982, n. 297.</li>
<li>La retribuzione annua da prendere in considerazione agli effetti del TFR è quella composta esclusivamente dai seguenti elementi:
<ul>
<li>Minimo contrattuale</li>
<li>Indennità di contingenza</li>
<li>Aumenti periodici di anzianità</li>
<li>Eventuale superminimo e/o assegno ad personam</li>
<li>Tredicesima mensilità</li>
<li>Indennità di volo</li>
<li>Eventuale indennità aggiuntiva di volo</li>
</ul></li>
<li>La quota annua da accantonare si ottiene dividendo per 13,5 i valori dei su riportati elementi contributivi corrisposti nell'anno.</li>
<li>Il dipendente con almeno 8 anni di anzianità aziendale ha diritto, per una sola volta, a richiedere un anticipo sul TFR nella misura massima del 70% dello spettante, per:
<ul>
<li>Spese sanitarie per terapie ed interventi straordinari;</li>
<li>Acquisto della prima casa d'abitazione, per sé o per i figli.</li>
</ul></li>
</ol>`
        },
        {
          id: "art-43",
          number: "43",
          title: "Assicurazioni",
          content: `<ol>
<li>La compagnia è tenuta ad assicurare i Piloti contro i rischi di volo e di infortunio nel periodo di impiego, a norma dell'art. 935 Cod. Nav., per i seguenti capitali:
<p><strong>a) per morte:</strong></p>
<div class="table-responsive"><table class="salary-table">
<tbody>
<tr><td>Comandante</td><td>${convertAmount(450000000)}</td></tr>
<tr><td>1° Ufficiale e Pilota di Prima</td><td>${convertAmount(350000000)}</td></tr>
<tr><td>Pilota di Seconda</td><td>${convertAmount(150000000)}</td></tr>
</tbody>
</table></div>
<p><strong>b) per invalidità permanente assoluta:</strong></p>
<div class="table-responsive"><table class="salary-table">
<tbody>
<tr><td>Comandante</td><td>${convertAmount(500000000)}</td></tr>
<tr><td>1° Ufficiale e Pilota di Prima</td><td>${convertAmount(400000000)}</td></tr>
<tr><td>Pilota di Seconda</td><td>${convertAmount(150000000)}</td></tr>
</tbody>
</table></div>
<p><strong>c) per invalidità permanente parziale (percentuale &le; 5%):</strong></p>
<div class="table-responsive"><table class="salary-table">
<tbody>
<tr><td>Comandante</td><td>${convertAmount(200000000)}</td></tr>
<tr><td>1° Ufficiale e Pilota di Prima</td><td>${convertAmount(150000000)}</td></tr>
<tr><td>Pilota di Seconda</td><td>${convertAmount(50000000)}</td></tr>
</tbody>
</table></div>
</li>
</ol>
<p><strong>A decorrere dall'1/1/2005:</strong></p>
<p><strong>a) per morte:</strong></p>
<div class="table-responsive"><table class="salary-table">
<tbody>
<tr><td>Comandante</td><td>${convertAmount(800000000)}</td></tr>
<tr><td>1° Ufficiale e Pilota di Prima</td><td>${convertAmount(600000000)}</td></tr>
<tr><td>Pilota di Seconda</td><td>${convertAmount(300000000)}</td></tr>
</tbody>
</table></div>
<p><strong>b) per invalidità permanente assoluta:</strong></p>
<div class="table-responsive"><table class="salary-table">
<tbody>
<tr><td>Comandante</td><td>${convertAmount(1000000000)}</td></tr>
<tr><td>1° Ufficiale e Pilota di Prima</td><td>${convertAmount(800000000)}</td></tr>
<tr><td>Pilota di Seconda</td><td>${convertAmount(400000000)}</td></tr>
</tbody>
</table></div>
<p><strong>c) per invalidità permanente parziale (percentuale &le; 5%):</strong></p>
<div class="table-responsive"><table class="salary-table">
<tbody>
<tr><td>Comandante</td><td>${convertAmount(700000000)}</td></tr>
<tr><td>1° Ufficiale e Pilota di Prima</td><td>${convertAmount(450000000)}</td></tr>
<tr><td>Pilota di Seconda</td><td>${convertAmount(200000000)}</td></tr>
</tbody>
</table></div>

<h4>Perdita Brevetto</h4>
<div class="table-responsive"><table class="salary-table">
<thead><tr><th>Età</th><th>Comandanti</th><th>1° Uff. e Pil. 1°</th><th>Pil. 2°</th></tr></thead>
<tbody>
<tr><td>fino a 44 anni</td><td>${convertAmount(130000000)}</td><td>${convertAmount(104000000)}</td><td>${convertAmount(48000000)}</td></tr>
<tr><td>fino a 45 anni</td><td>${convertAmount(114000000)}</td><td>${convertAmount(91000000)}</td><td>${convertAmount(43000000)}</td></tr>
<tr><td>fino a 46 anni</td><td>${convertAmount(110000000)}</td><td>${convertAmount(89000000)}</td><td>${convertAmount(43000000)}</td></tr>
<tr><td>fino a 47 anni</td><td>${convertAmount(108000000)}</td><td>${convertAmount(87000000)}</td><td>${convertAmount(43000000)}</td></tr>
<tr><td>fino a 48 anni</td><td>${convertAmount(105000000)}</td><td>${convertAmount(84000000)}</td><td>${convertAmount(43000000)}</td></tr>
<tr><td>fino a 49 anni</td><td>${convertAmount(103000000)}</td><td>${convertAmount(82000000)}</td><td>${convertAmount(43000000)}</td></tr>
<tr><td>fino a 50 anni</td><td>${convertAmount(100000000)}</td><td>${convertAmount(80000000)}</td><td>${convertAmount(43000000)}</td></tr>
<tr><td>fino a 51 anni</td><td>${convertAmount(95000000)}</td><td>${convertAmount(76000000)}</td><td>${convertAmount(40000000)}</td></tr>
<tr><td>fino a 52 anni</td><td>${convertAmount(90000000)}</td><td>${convertAmount(72000000)}</td><td>${convertAmount(37000000)}</td></tr>
<tr><td>fino a 53 anni</td><td>${convertAmount(84000000)}</td><td>${convertAmount(67000000)}</td><td>${convertAmount(34000000)}</td></tr>
<tr><td>fino a 54 anni</td><td>${convertAmount(80000000)}</td><td>${convertAmount(63000000)}</td><td>${convertAmount(31000000)}</td></tr>
<tr><td>fino a 55 anni</td><td>${convertAmount(74000000)}</td><td>${convertAmount(59000000)}</td><td>${convertAmount(28000000)}</td></tr>
<tr><td>fino a 56 anni</td><td>${convertAmount(60000000)}</td><td>${convertAmount(48000000)}</td><td>${convertAmount(23000000)}</td></tr>
<tr><td>fino a 57 anni</td><td>${convertAmount(45000000)}</td><td>${convertAmount(36000000)}</td><td>${convertAmount(18000000)}</td></tr>
<tr><td>fino a 58 anni</td><td>${convertAmount(31000000)}</td><td>${convertAmount(25000000)}</td><td>${convertAmount(13000000)}</td></tr>
<tr><td>fino a 59 anni</td><td>${convertAmount(17000000)}</td><td>${convertAmount(14000000)}</td><td>${convertAmount(8000000)}</td></tr>
<tr><td>fino a 60 anni</td><td>${convertAmount(2500000)}</td><td>${convertAmount(1500000)}</td><td>${convertAmount(1000000)}</td></tr>
</tbody>
</table></div>

<h4>Perdita Brevetto - A decorrere dall'1/1/2005</h4>
<div class="table-responsive"><table class="salary-table">
<thead><tr><th>Età</th><th>Comandanti</th><th>1° Uff. e Pil. 1°</th><th>Pil. 2°</th></tr></thead>
<tbody>
<tr><td>fino a 44 anni</td><td>${convertAmount(288600000)}</td><td>${convertAmount(230880000)}</td><td>${convertAmount(106560000)}</td></tr>
<tr><td>fino a 45 anni</td><td>${convertAmount(253080000)}</td><td>${convertAmount(202020000)}</td><td>${convertAmount(95460000)}</td></tr>
<tr><td>fino a 46 anni</td><td>${convertAmount(244200000)}</td><td>${convertAmount(197580000)}</td><td>${convertAmount(95460000)}</td></tr>
<tr><td>fino a 47 anni</td><td>${convertAmount(239760000)}</td><td>${convertAmount(193140000)}</td><td>${convertAmount(95460000)}</td></tr>
<tr><td>fino a 48 anni</td><td>${convertAmount(233100000)}</td><td>${convertAmount(186480000)}</td><td>${convertAmount(95460000)}</td></tr>
<tr><td>fino a 49 anni</td><td>${convertAmount(228660000)}</td><td>${convertAmount(182040000)}</td><td>${convertAmount(95460000)}</td></tr>
<tr><td>fino a 50 anni</td><td>${convertAmount(222000000)}</td><td>${convertAmount(177600000)}</td><td>${convertAmount(95460000)}</td></tr>
<tr><td>fino a 51 anni</td><td>${convertAmount(210900000)}</td><td>${convertAmount(168720000)}</td><td>${convertAmount(88800000)}</td></tr>
<tr><td>fino a 52 anni</td><td>${convertAmount(199800000)}</td><td>${convertAmount(159840000)}</td><td>${convertAmount(82140000)}</td></tr>
<tr><td>fino a 53 anni</td><td>${convertAmount(186480000)}</td><td>${convertAmount(148740000)}</td><td>${convertAmount(75480000)}</td></tr>
<tr><td>fino a 54 anni</td><td>${convertAmount(177600000)}</td><td>${convertAmount(139860000)}</td><td>${convertAmount(68820000)}</td></tr>
<tr><td>fino a 55 anni</td><td>${convertAmount(164280000)}</td><td>${convertAmount(130980000)}</td><td>${convertAmount(62160000)}</td></tr>
<tr><td>fino a 56 anni</td><td>${convertAmount(133200000)}</td><td>${convertAmount(106560000)}</td><td>${convertAmount(51060000)}</td></tr>
<tr><td>fino a 57 anni</td><td>${convertAmount(99900000)}</td><td>${convertAmount(79920000)}</td><td>${convertAmount(39960000)}</td></tr>
<tr><td>fino a 58 anni</td><td>${convertAmount(68820000)}</td><td>${convertAmount(55500000)}</td><td>${convertAmount(28860000)}</td></tr>
<tr><td>fino a 59 anni</td><td>${convertAmount(37740000)}</td><td>${convertAmount(31080000)}</td><td>${convertAmount(17760000)}</td></tr>
<tr><td>fino a 60 anni</td><td>${convertAmount(5550000)}</td><td>${convertAmount(3330000)}</td><td>${convertAmount(2220000)}</td></tr>
</tbody>
</table></div>`
        }
      ]
    },
    {
      id: "parte-specifica",
      title: "3. Parte Specifica",
      articles: [
        {
          id: "norma-generale",
          number: "",
          title: "Norma generale",
          content: `<p>Il "tempo di volo" ed il "tempo di servizio" sono disciplinati dalle disposizioni attualmente in vigore per quanto concerne, ai fini della sicurezza, le "norme operative per l'esercizio degli aeromobili in servizio di trasporto pubblico" (cfr. doc. 41/23100/73 Ed. gennaio 1997 - Ministero dei Trasporti - Direzione Generale Aviazione Civile - Servizio di Navigazione Aerea).</p>
<p>Le parti hanno peraltro evidenziato quanto sia necessario approfondire con la suddetta Direzione Generale la specificità del settore ad ala rotante che richiede l'integrazione della suddetta normativa con dettami più adeguati alle realtà operative, nel rispetto delle prevalenti esigenze di sicurezza.</p>`
        },
        {
          id: "art-44",
          number: "44",
          title: "Tempo di impiego",
          content: `<ol>
<li>Si considera giornata di impiego del Pilota quella passata sulla base per svolgere l'attività di volo, a prescindere dalla durata della prestazione.</li>
<li>Si considera, altresì, giornata di lavoro:
<ol type="a">
<li>il tempo che il Pilota trascorre a terra nello svolgimento di compiti assegnatigli dalla Compagnia ed inerenti alle proprie mansioni;</li>
<li>il tempo in cui il dipendente è impegnato in corsi, lezioni, voli di prova, voli di addestramento e controllo;</li>
<li>il tempo che il dipendente impiega per sottoporsi alle visite mediche di idoneità.</li>
</ol></li>
<li>Il Pilota presterà la propria attività a giornata per un minimo di 183 giornate annuali ed un massimo inderogabile totale di 200 giornate lavorate nel corso dell'anno solare.</li>
<li>Le giornate eccedenti dalla 184ª compresa alla 200ª compresa verranno interamente retribuite come lavoro straordinario, secondo quanto previsto dall'art. 26.</li>
<li>Per il personale impiegato in attività di offshore, il periodo di impiego verrà conteggiato sempre come giornata intera indipendentemente dalla presenza sulla base.</li>
<li>La giornata di impiego non potrà superare le 13 ore di lavoro.</li>
</ol>`
        },
        {
          id: "art-45",
          number: "45",
          title: "Orario di lavoro - Tempo di servizio - Tempo di volo per Piloti HEMS e Offshore",
          content: `<ol>
<li>I Piloti che svolgono l'attività di elisoccorso-HEMS e Offshore, vengono impiegati su turni paritetici di servizio e riposo, programmati secondo quanto previsto dalla normativa ENAC OPV 02 del 23-07-1999, e comunicati agli interessati con almeno 14 giorni di anticipo rispetto alla data di inizio turno.</li>
</ol>`
        },
        {
          id: "art-46",
          number: "46",
          title: "Impiego extra - Casi di deroga",
          content: `<ol>
<li>Nel rispetto dei limiti dei giorni di impiego previsti dal precedente art. 44 la Compagnia potrà richiedere ai piloti eventuali giorni di impiego extra per comprovate esigenze di servizio.</li>
<li>Al pilota resosi disponibile, verrà corrisposta l'indennità straordinaria prevista dall'art. 26 secondo le seguenti modalità: fermo rimanendo il limite inderogabile dei 200 giorni di impiego annuale, l'Azienda ogni trimestre salderà le giornate effettuate oltre il normale regime delle turnazioni. Per trimestre si intendono i seguenti periodi fissi:
<ul>
<li>1° gennaio - 31 marzo</li>
<li>1° aprile - 30 giugno</li>
<li>1° luglio - 30 settembre</li>
<li>1° ottobre - 31 dicembre</li>
</ul></li>
<li>Al 31 dicembre l'Azienda effettuerà una verifica rispetto al limite minimo contrattuale di 183/190/200 giorni.</li>
</ol>`
        },
        {
          id: "art-47",
          number: "47",
          title: "Impiego \"corporate\"",
          content: `<ol>
<li>Per le Società o gli Enti che non hanno la licenza di trasporto aereo o di lavoro aereo, ma che dispongono di elicotteri quali mezzi privati o aziendali e che quindi li utilizzano solo ed esclusivamente per uso proprio interno, senza alcun scopo di lucro, al pilota dipendente iscritto al Fondo Volo, si applica la disciplina normativa ed economica minima prevista nell'allegato 2 del presente CCNL.</li>
</ol>`
        },
        {
          id: "art-48",
          number: "48",
          title: "Ferie",
          content: `<ol>
<li>Il Pilota ha diritto ad un periodo di ferie annuali della durata di 26 giorni.</li>
<li>Il godimento delle ferie è obbligatorio.</li>
<li>Durante il periodo di ferie la Compagnia corrisponderà al Pilota la normale retribuzione.</li>
<li>Il Pilota potrà scegliere il periodo di ferie in ragione del 50% della propria spettanza annua. Nel caso che la Compagnia limiti, per comprovati motivi operativi, le assegnazioni delle ferie nel periodo che va dal 15 giugno al 15 ottobre, il godimento delle ferie resterà a totale discrezione del Pilota nel restante periodo dell'anno.</li>
<li>Qualora il Pilota venga richiamato in servizio, è dovuto il trattamento di rimborso spese sostenute dal luogo ove lo stesso usufruisce del periodo di ferie sino alla base di impiego.</li>
</ol>`
        },
        {
          id: "art-49",
          number: "49",
          title: "Disposizioni e regolamenti aziendali",
          content: `<ol>
<li>Oltre alla presente normativa, il Pilota dovrà osservare le disposizioni ed i regolamenti impartiti dalla Compagnia entro i limiti di legge e della presente normativa.</li>
<li>I regolamenti aziendali e le disposizioni dovranno essere portati a conoscenza del Pilota e delle OO.SS. firmatarie del presente CCNL.</li>
</ol>`
        },
        {
          id: "art-50",
          number: "50",
          title: "Intese relative allo statuto dei lavoratori",
          content: `<ol>
<li>Il presente contratto ottempera al disposto della Legge 20 maggio 1970, n. 300, tenendo presente che la sentenza della Corte Costituzionale n. 41 del 31 gennaio 1991 ha dichiarato l'illegittimità costituzionale dell'art. 35, 3° comma, della Legge 20 maggio 1970, n. 300, nella parte in cui prevede la diretta applicabilità al personale di volo anche dell'art. 1 della Legge n. 108 dell'11 maggio 1990.</li>
</ol>`
        },
        {
          id: "art-51",
          number: "51",
          title: "Rappresentanti sindacali in seno alla società",
          content: `<ol>
<li>Le organizzazioni sindacali firmatarie del presente contratto designano le rispettive rappresentanze sindacali aziendali dei Piloti, scelte nell'ambito dei Piloti loro associati.</li>
<li>Ai componenti delle RSA sono riservate le funzioni, i compiti e la tutela previsti per i membri di Commissione Interna dall'accordo interconfederale del 18/4/96.</li>
<li>La Società garantirà ai rappresentanti sindacali la concessione di almeno 12 giorni lavorativi annui come permessi sindacali.</li>
</ol>`
        },
        {
          id: "art-52",
          number: "52",
          title: "Provvedimenti disciplinari",
          content: `<ol>
<li>Le mancanze del Pilota possono essere punite, a seconda della loro gravità, con:
<ol type="a">
<li>rimprovero scritto;</li>
<li>sospensione dal servizio e dalla retribuzione fino ad un massimo di 10 giorni;</li>
<li>licenziamento con preavviso;</li>
<li>licenziamento senza preavviso.</li>
</ol></li>
<li>Le sanzioni disciplinari sono regolate dalla legge 15 luglio 1966, n. 604, dal Codice della Navigazione e dalla legge 20 maggio 1970, n. 300 (Statuto dei diritti dei lavoratori).</li>
</ol>`
        },
        {
          id: "art-53",
          number: "53",
          title: "Licenziamenti per riduzione del personale",
          content: `<ol>
<li>A tali licenziamenti si applica la Legge 223/91 e successive modificazioni.</li>
<li>I licenziamenti collettivi per riduzione del personale, riguardanti più di 5 lavoratori contemporaneamente, sono disciplinati dalla Legge 23 luglio 1991 n. 223.</li>
<li>Per l'individuazione dei lavoratori da licenziare si farà ricorso a criteri prioritari e criteri concorsuali:
<p><strong>a) Criteri di priorità:</strong></p>
<ul>
<li>chi abbia già maturato i requisiti minimi per collocarsi in pensione;</li>
<li>chi sia stato assunto con contratto a tempo determinato.</li>
</ul>
<p><strong>b) Criteri concorsuali:</strong></p>
<ul>
<li>criterio delle esigenze tecnico-produttive dell'azienda;</li>
<li>carichi familiari;</li>
<li>posizionamento nella lista d'anzianità.</li>
</ul></li>
<li>Particolare riguardo per chi si trova negli ultimi 5 anni di contribuzione per maturare il diritto al pensionamento.</li>
</ol>`
        },
        {
          id: "art-54",
          number: "54",
          title: "Riassunzioni",
          content: `<ol>
<li>Nel caso in cui la Compagnia provveda a riassumere personale precedentemente licenziato (escludendo licenziamenti per motivi disciplinari), dette riassunzioni non potranno prescindere dal diritto di prelazione spettante ai lavoratori, così come regolamentato dalla lista d'anzianità aziendale, sempreché la riassunzione possa avvenire nel limite di 12 mesi.</li>
</ol>`
        },
        {
          id: "art-55",
          number: "55",
          title: "Trattamento per visite mediche e rinnovo brevetti",
          content: `<ol>
<li>La Compagnia considera giornate lavorate quelle impiegate dal Pilota per sottoporsi a visite mediche ordinarie e straordinarie di idoneità presso le autorità competenti o per il mantenimento od il rinnovo dei brevetti. Le relative spese verranno rifuse dalla Compagnia secondo le modalità aziendali.</li>
</ol>`
        },
        {
          id: "art-56",
          number: "56",
          title: "Equipaggiamento e divise",
          content: `<ol>
<li>La Compagnia si farà carico di fornire al Pilota o Comandante tutti gli equipaggiamenti e tutte le divise o tute di volo necessarie, così come stabilito nei singoli accordi integrativi aziendali.</li>
</ol>`
        },
        {
          id: "art-57",
          number: "57",
          title: "Derogabilità del presente CCNL",
          content: `<ol>
<li>Il presente CCNL non è derogabile se non per quelle parti di maggior favore per il Pilota, comunque sancite dalla sua Compagnia e preesistenti al presente contratto.</li>
<li>Tutti i precedenti contratti, qualunque denominazione essi rechino, siano essi collettivi che individuali, fatto salvo quanto previsto dal comma precedente, decadono automaticamente all'entrata in vigore del presente CCNL.</li>
</ol>`
        },
        {
          id: "art-58",
          number: "58",
          title: "Scuola di volo",
          content: `<p>Le parti si impegnano ad esaminare la specificità di tale attività ed a definirne i criteri di riferimento entro la data del 31/12/2001.</p>
<p>Resta comunque fermo che quelle Aziende che stanno attualmente svolgendo attività mista (scuola e lavoro aereo) dovranno, qualora decidessero di dare applicazione nella propria azienda della normativa specifica prevista per il lavoro aereo, attribuire per i piloti impiegati in attività istruzionale la classificazione, e conseguentemente la retribuzione, prevista dal presente contratto.</p>`
        },
        {
          id: "art-59",
          number: "59",
          title: "Decorrenza e durata del presente contratto",
          content: `<ol>
<li>Il presente CCNL avrà durata quadriennale.</li>
<li>Esso decorre dal 1/1/2001 e scade il 31/12/2004.</li>
<li>Si intenderà automaticamente prorogato di anno in anno se non disdetto da una delle parti almeno tre mesi prima della scadenza a mezzo raccomandata R.R.</li>
<li>Qualora in vigenza del presente CCNL le predette disposizioni normative dovessero subire modificazioni, sia per la parte normativa che economica, le parti si incontreranno per valutarne l'impatto e concordare le eventuali variazioni contrattuali.</li>
</ol>`
        }
      ]
    },
    {
      id: "lavoro-aereo",
      title: "4. Lavoro Aereo",
      articles: [
        {
          id: "lavoro-aereo-norme",
          number: "",
          title: "Disciplina del Lavoro Aereo",
          content: `<p>La presente normativa relativa al lavoro aereo, in considerazione della sua specificità nell'ambito del settore, si applica a quelle aziende che svolgano solo ed esclusivamente l'attività di lavoro aereo (sono quindi escluse quelle Aziende che svolgano un'attività mista).</p>
<p>Ai piloti impiegati in tali società trova applicazione la seguente normativa:</p>
<h4>1) Qualifiche e Gradi</h4>
<ul>
<li>Pilota 1° Ufficiale</li>
<li>Pilota di 1°</li>
<li>Pilota di 2°</li>
</ul>
<p>Il passaggio ai gradi superiori viene attribuito alle seguenti condizioni:</p>
<ul>
<li><strong>A Pilota di 2°:</strong> aver maturato 500 ore di volo ovvero 2 anni di anzianità aziendale.</li>
<li><strong>Da Pilota di 2° a Pilota di 1°:</strong> aver maturato almeno 1500 ore in attività.</li>
<li><strong>Da Pilota di 1° a 1° Ufficiale:</strong> aver maturato almeno 3000 ore in attività e tre anni di anzianità nel grado.</li>
</ul>
<h4>2) Trattamento retributivo</h4>
<p>Per il trattamento retributivo si rinvia alla tabella allegata al presente contratto fino alla qualifica di primo ufficiale.</p>
<h4>3) Impiego</h4>
<p>A decorrere dal 01-01-2005 i piloti assunti anteriormente alla data di stipula del presente CCNL per un numero di giornate pari a 190 o 200, detti limiti saranno riportati a 183 senza riproporzionamento della retribuzione contrattuale.</p>
<p>Nell'ambito delle giornate di impiego (200, 190, 183), 15 di queste possono essere scambiate con 30 giornate di impiego ridotto. Si definisce impiego ridotto una giornata in cui il tempo d'impiego non superi le 5 ore con termine ovvero inizio del servizio alle ore 13.00 e comunque senza il superamento delle 3 ore di volo.</p>`
        }
      ]
    },
    {
      id: "allegati",
      title: "Allegati",
      articles: [
        {
          id: "allegato-1",
          number: "",
          title: "Allegato 1 - Tabella Minimi Contrattuali",
          content: `<h4>Retribuzioni Minime Piloti di Elicottero CCNL 2001 - 183 giorni</h4>
<div class="table-responsive"><table class="salary-table">
<thead><tr><th>Grado</th><th>Minimo</th><th>Volo (60h)</th><th>Totale Mese</th><th>Totale Anno (x12)</th><th>Ind. Volo Integrativa (200h)</th><th>Totale Complessivo Annuale</th></tr></thead>
<tbody>
<tr><td>C.te Sup.</td><td>${convertAmount(2759461)}</td><td>${convertAmount(4328820)}</td><td>${convertAmount(7088281)}</td><td>${convertAmount(87818833)}</td><td>${convertAmount(8168000)}</td><td>${convertAmount(95986833)}</td></tr>
<tr><td>1° C.te</td><td>${convertAmount(2593846)}</td><td>${convertAmount(4294440)}</td><td>${convertAmount(6888286)}</td><td>${convertAmount(85253278)}</td><td>${convertAmount(8048000)}</td><td>${convertAmount(93301278)}</td></tr>
<tr><td>C.te</td><td>${convertAmount(2432846)}</td><td>${convertAmount(4255980)}</td><td>${convertAmount(6688826)}</td><td>${convertAmount(82698758)}</td><td>${convertAmount(7903000)}</td><td>${convertAmount(90601758)}</td></tr>
<tr><td>1° Uff.</td><td>${convertAmount(2121846)}</td><td>${convertAmount(3157920)}</td><td>${convertAmount(5279766)}</td><td>${convertAmount(65479038)}</td><td>${convertAmount(7425000)}</td><td>${convertAmount(72904038)}</td></tr>
<tr><td>Pil. 1°</td><td>${convertAmount(2036538)}</td><td>${convertAmount(2761080)}</td><td>${convertAmount(4797618)}</td><td>${convertAmount(59607954)}</td><td>${convertAmount(7185000)}</td><td>${convertAmount(66792954)}</td></tr>
<tr><td>Pil. 2°</td><td>${convertAmount(1936384)}</td><td>${convertAmount(2197440)}</td><td>${convertAmount(4133824)}</td><td>${convertAmount(51424272)}</td><td>${convertAmount(6195000)}</td><td>${convertAmount(57619272)}</td></tr>
</tbody>
</table></div>

<h4>Retribuzioni Minime - Settore "Lavoro Aereo"</h4>
<div class="table-responsive"><table class="salary-table">
<thead><tr><th>Grado</th><th>Minimo</th><th>Volo (60h)</th><th>Totale Mese</th><th>Totale Anno (x12)</th><th>Ind. Volo Integrativa (200h)</th><th>Totale Complessivo Annuale</th></tr></thead>
<tbody>
<tr><td>1° Uff.</td><td>${convertAmount(2121846)}</td><td>${convertAmount(3157920)}</td><td>${convertAmount(5279766)}</td><td>${convertAmount(65479038)}</td><td>${convertAmount(7425000)}</td><td>${convertAmount(72904038)}</td></tr>
<tr><td>Pil. 1°</td><td>${convertAmount(2036538)}</td><td>${convertAmount(2761080)}</td><td>${convertAmount(4797618)}</td><td>${convertAmount(59607954)}</td><td>${convertAmount(7185000)}</td><td>${convertAmount(66792954)}</td></tr>
<tr><td>Pil. 2°</td><td>${convertAmount(1936384)}</td><td>${convertAmount(2197440)}</td><td>${convertAmount(4133824)}</td><td>${convertAmount(51424272)}</td><td>${convertAmount(6195000)}</td><td>${convertAmount(57619272)}</td></tr>
</tbody>
</table></div>

<h4>Retribuzioni Minime - Salario di Ingresso</h4>
<div class="table-responsive"><table class="salary-table">
<thead><tr><th>Grado</th><th>Minimo</th><th>Volo (60h)</th><th>Totale Mese</th><th>Totale Anno (x12)</th><th>Ind. Volo Integrativa (200h)</th><th>Totale Complessivo Annuale</th></tr></thead>
<tbody>
<tr><td>Pil. 2°</td><td>${convertAmount(1936384)}</td><td>${convertAmount(992580)}</td><td>${convertAmount(2928964)}</td><td>${convertAmount(35147568)}</td><td>${convertAmount(1778000)}</td><td>${convertAmount(36925568)}</td></tr>
</tbody>
</table></div>`
        },
        {
          id: "allegato-2",
          number: "",
          title: "Allegato 2 - Impiego Corporate",
          content: `<ol>
<li><strong>Giorni di servizio - retribuzione.</strong><br>
Il Pilota potrà essere impiegato fino ad un massimo di 220 giorni lavorativi. La retribuzione contrattuale sarà aumentata del 40% rispetto alla retribuzione totale della tabella allegata al contratto, riferita ai 183 giorni di servizio.</li>
<li><strong>Riposi mensili.</strong><br>
In relazione ai giorni di servizio prestati, i riposi dovranno essere suddivisi mensilmente in modo proporzionale ed uniforme. Essi assorbono le domeniche e le festività. Il turno di riposo deve essere comunicato al pilota con un anticipo di almeno 7 giorni.</li>
<li><strong>Indennità straordinaria di servizio.</strong><br>
Al pilota che non usufruisca dei giorni di riposo spettanti, la compagnia corrisponderà nel mese successivo, per ogni giorno di mancato riposo, una "indennità straordinaria di servizio" commisurata al 200% della retribuzione giornaliera.</li>
<li><strong>Indennità di trasferta (diaria).</strong><br>
Il pilota chiamato a svolgere la propria attività fuori sede ha diritto alle seguenti indennità:
<div class="table-responsive"><table class="salary-table">
<tbody>
<tr><td>ore 8.00 - colazione</td><td>${convertAmount(10000)}</td></tr>
<tr><td>ore 13.00 - pranzo</td><td>${convertAmount(60000)}</td></tr>
<tr><td>ore 19.30 - cena</td><td>${convertAmount(60000)}</td></tr>
</tbody>
</table></div>
<p>Per le trasferte internazionali le indennità saranno aumentate del 25%. In alternativa è consentita la piè di lista.</p></li>
<li><strong>Reperibilità.</strong><br>
A richiesta dell'esercente il personale di volo potrà garantire la propria reperibilità per un suo utilizzo entro un'ora dalla chiamata. Il giorno di reperibilità comprende l'arco delle 24 ore e viene considerato a tutti gli effetti giorno di servizio.</li>
<li><strong>Ferie.</strong><br>
Il pilota ha diritto ad un periodo di ferie annuali della durata di 26 giorni.</li>
</ol>`
        }
      ]
    }
  ]
};
