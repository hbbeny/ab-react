import React, { Component } from 'react'
import Image from '../../../components/Image/Image.js'
import importAll from '../../../functions/ImportAll/ImportAll.js'
import Iframe from 'react-iframe'
import './Menu.css'

const about = () => {
  return (
    <React.Fragment>
      <h1 style={{ textTransform: 'none' }}>
        AB PLUS-BENEŠ, s.r.o. | Vše pro Váš chov
      </h1>
      <p>
        Firma AB PLUS - Beneš byla založena v roce 1999 na základě předchozí
        dlouholeté spolupráce v oblasti poradenství a prodeje dezinfekčních
        prostředků pro firmu Agrokombinát Slušovice - divize Cheport Vizovice.
        Vzhledem k tomu, že naším cílem je maximální spokojenost zákazníka,
        došlo postupnému rozšiřování sortimentu o chovatelské potřeby a výživové
        doplňky. V současné době se zaměřujeme na kompletní poradenství v
        živočišné výrobě s důrazem na hygienu v prvovýrobě mléka, stájové a
        pastevní potřeby. Díky spolupráci s krmivářskými firmami také
        zajišťujeme krmné doplňky, minerální lizy a poradenství v této oblasti.
        Našim cílem je pro Vás vytvořit komplexní nabídku služeb ve vysoké
        kvalitě se šetrným přístupem k přírodě. Proto jsme v posledních letech
        započali s pravidelnými semináři a školeními pro naše zákazníky kde
        představujeme nové trendy. Dále se tradičně účastníme zemědělských
        výstav - Kralovice, Mrákov, Žákavá. Děkujeme Vám za projevenou důvěru v
        minulých letech a těšíme se na další spolupráci. Team firmy AB PLUS -
        Beneš, s. r. o.
      </p>
    </React.Fragment>
  )
}
class Partners extends Component {
  render () {
    const images = importAll(
      require.context('../../../assets/img/partneri', false, /^\.\/.*\.png$/)
    )
    return (
      <React.Fragment>
        <h1>Obchodní Partneři</h1>
        <div id='partneri' className='col-12 offset-lg-2 col-lg-8'>
          <a
            href='http://www.agrone-trading.cz/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='img-responsive col-12 col-sm-6'
              src={images['agrone-trading-logo.png']}
              alt='logo'
            />
          </a>
          <a
            href='http://www.dezi.cz/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='img-responsive col-12 col-sm-6'
              src={images['elagro-logo.png']}
              alt='logo'
            />
          </a>
          <a
            href='https://www.forstagro.cz'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='img-responsive col-6 col-sm-3'
              src={images['forst-agro-logo.png']}
              alt='logo'
            />
          </a>
          <a
            href='https://www.heapco.cz/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='img-responsive col-6 col-sm-3'
              src={images['heapco-logo.png']}
              alt='logo'
            />
          </a>
          <a
            href='https://www.hypred.com/en/?country=CZ'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='img-responsive col-12 col-sm-6'
              src={images['hypred-logo.png']}
              alt='logo'
            />
          </a>
          <a
            href='http://www.saltpeter.eu/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='img-responsive col-12 col-sm-6'
              src={images['saltpeter-logo.png']}
              alt='logo'
            />
          </a>
          <a
            href='http://www.ecolabcz.cz/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='img-responsive col-12 col-sm-6'
              src={images['ecolab-logo.png']}
              alt='logo'
            />
          </a>
          <a
            href='https://www.selko.cz/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='img-responsive col-12 col-sm-6'
              src={images['selko-logo.png']}
              alt='logo'
            />
          </a>
          <a
            href='http://www.guyokrma.cz/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='img-responsive col-12 col-sm-6'
              src={images['guyokrma-logo.png']}
              alt='logo'
            />
          </a>
        </div>
      </React.Fragment>
    )
  }
}

const references = () => {
  return (
    <React.Fragment>
      <h1>Reference</h1>
      <div>
        Díky dlouholetému působení na trhu firma AB PLUS BENEŠ, s.r.o. s
        desítkami podniků, především v oblasti jihozápadních Čech. Pro tyto
        firmy zajišťujeme kompletní servis a poradenství v oblasti hygieny,
        prvovýroby mléka a chovatelských potřeb. Součástí služeb jsou odborné
        semináře, školení obsluhy a zpracování sanitačních řádů.
        <br />
        <br />
        <p>
          Vybrané podniky dle regionů:
          <br />
          PJ - ZEM. SPOL. KOMORNO a. s.
          <br />
          KT - VOD VELKÝ BOR
          <br />
          KT - ZOD KOLINEC
          <br />
          ST - VOD KADOV
          <br />
          DO - AGRIMA DRAŽENOV a. s.
          <br />
          DO - KOLOVEČSKÁ ZEMĚDĚLSKÁ a. s.
          <br />
          DO - POZEP POBĚŽOVICE
          <br />
          RA - AGRO MALINOVÁ
          <br />
        </p>
      </div>
    </React.Fragment>
  )
}
const shipping = () => {
  return (
    <React.Fragment>
      <h1>Doprava/Obchodní Podmínky</h1>
      <div>
        <ul className='list-unstyled'>
          <li>OBJEDNÁVÁNÍ ZBOŽÍ - vždy uvádějte následující údaje:</li>
          <li>
            <ul>
              <li>katalogové číslo, název zboží, počet kusů</li>
              <li>přesnou fakturační adresu a místo doručení zásilky</li>
              <li>
                jméno a příjmení objednávajícího a dostupné telefonní číslo
              </li>
            </ul>
          </li>
          <li>DOPRAVA ZBOŽÍ - pro bezproblémové doručení je nutno uvézt:</li>
          <li>
            <ul>
              <li>místo doručení</li>
              <li>kontaktní osobu</li>
              <li>telefonní číslo</li>
            </ul>
          </li>
          <li>CENY PŘEPRAVNÉHO:</li>
          <li>
            <ul>
              <li>balík do 30 kg - Přeprava DPD nebo PPL ceník viz. e-shop</li>
              <li>při objednávce nad 3000,- Kč bez DPH DOPRAVA ZDARMA</li>
              <li>
                při dodávkách nestandartních zásilek dezinfekční přípravky,
                krmiva a jiné velkoobjemové zboží bude cena přepravného a dodací
                podmínky projednány individuálně se zákazníkem
              </li>
            </ul>
          </li>
          <li>PLATEBNÍ PODMÍNKY:</li>
          <li>
            <ul>
              <li>zaplacení v hotovosti</li>
              <li>na dobírku</li>
              <li>na fakturu pouze po předchozí dohodě</li>
            </ul>
          </li>
          <li>ZÁRUČNÍ PODMÍNKY A REKLAMACE:</li>
          <li>
            <ul>
              <li>
                řídí se platným obchodním zákoníkem a předpisy s ním
                souvisejícími
              </li>
            </ul>
          </li>
        </ul>
        Podle zákona o evidenci tržeb je prodávající povinen vystavit kupujícímu
        účtenku. Zároveň je povinen zaevidovat přijatou tržbu u správce daně
        online; v případě technického výpadku pak nejpozději do 48 hodin.
      </div>
    </React.Fragment>
  )
}
class Contacts extends Component {
  render () {
    return (
      <React.Fragment>
        <h1>Kontakty</h1>
        <div className='text-center row'>
          <div className='col-12 col-md-6' id='contacts'>
            <p>
              <strong>
                ADRESA:
                <br />
                AB PLUS BENEŠ s.r.o.
                <br />
                KUCÍNY č. 20, 334 01 Přeštice
                <br />
                Email:{' '}
                <a className='contact' href='mailto:info@abplus-benes.cz'>
                  info@abplus-benes.cz
                </a>
                <br />
                Mob1:{' '}
                <a className='contact' href='tel:+420739239649'>
                  +420 739 239 649
                </a>
                <br />
                Mob2:{' '}
                <a className='contact' href='tel:+420734589469'>
                  +420 734 589 469
                </a>
                <br />
                IČO: 28059662, DIČ: CZ28059662
              </strong>
              <br />
            </p>
            <p>
              ODBORNÉ PORADENSTVÍ
              <br />
              <strong>VÁCLAV BENEŠ - JEDNATEL</strong>
              <br />
              Email:{' '}
              <a className='contact' href='mailto:info@abplus-benes.cz'>
                info@abplus-benes.cz
              </a>
              <br />
              Mob:{' '}
              <a className='contact' href='tel:+420731165822'>
                +420 731 165 822
              </a>
              <br />
            </p>
            <p>
              EKONOM, ADMINISTRATIVA
              <br />
              <strong>ODETA TÄGLOVÁ</strong>
              <br />
              Email:{' '}
              <a className='contact' href='mailto:uctarna@abplus-benes.cz'>
                uctarna@abplus-benes.cz
              </a>
              <br />
              Mob:{' '}
              <a className='contact' href='tel:+420734589469'>
                +420 734 589 469
              </a>
              <br />
            </p>
            <p>
              MARKETING, ADMINISTRATIVA
              <br />
              <strong>Mgr. et Bc. KATEŘINA BENEŠOVÁ</strong>
              <br />
              Email:{' '}
              <a
                className='contact'
                href='mailto:katerina.benesova@abplus-benes.cz'
              >
                katerina.benesova@abplus-benes.cz
              </a>
              <br />
              Mob:{' '}
              <a className='contact' href='tel:+420739091428'>
                +420 739 091 428
              </a>
              <br />
            </p>
            <p>
              MARKETING, ESHOP
              <br />
              <strong>MILADA SOUKUPOVÁ</strong>
              <br />
              Email:{' '}
              <a className='contact' href='mailto:marketing@abplus-benes.cz'>
                marketing@abplus-benes.cz
              </a>
              <br />
              Mob:{' '}
              <a className='contact' href='tel:+420739239649'>
                +420 739 239 649
              </a>
              <br />
            </p>
            <p>
              ESHOP, OBJEDNÁVKY
              <br />
              <strong>HELENA GLÄNZNEROVÁ</strong>
              <br />
              Email:{' '}
              <a className='contact' href='mailto:e-shop@abplus-benes.cz'>
                e-shop@abplus-benes.cz
              </a>
              <br />
              Mob:{' '}
              <a className='contact' href='tel:+420739239649'>
                +420 739 239 649
              </a>
              <br />
            </p>
          </div>
          <div className='col-12 col-md-6' id='facebook-page'>
            <div style={{ margin: 'auto auto' }}>
              <Iframe
                url='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fabplusbenes%2F&tabs=timeline&width=340&height=663&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
                width='340'
                height='663'
                position='relative'
                display='initial'
                scrolling='true'
                frameborder='0'
                allowTransparency='true'
                allow='encrypted-media'
              />
            </div>
          </div>
          <div id='map' className='col-12'>
            <Iframe
              className='col-12'
              url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2587.7362738812644!2d13.364907816048474!3d49.564999079363155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ac2a37dc60cab%3A0x148f0dd4f8b7294f!2zS3Vjw61ueSAyMCwgMzM0IDAxIFDFmcOtY2hvdmljZQ!5e0!3m2!1scs!2scz!4v1510236008755'
              width='700'
              height='400'
              display='initial'
              position='relative'
              allowfullscreen
            />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

class Seminare extends Component {
  render () {
    const images = importAll(
      require.context(
        '../../../assets/img/events/seminars/',
        false,
        /^\.\/.*\.jpg$/
      )
    )
    const pdfs = importAll(
      require.context(
        '../../../assets/pdf/events/seminars/',
        false,
        /^\.\/.*\.pdf$/
      )
    )
    console.log(images)
    let ImagesComponents = []
    for (let i = 0; i < Object.keys(pdfs).length; i++) {
      ImagesComponents.push(
        <Image
          classesDiv=''
          classesLink='col-12 offset-sm-4 col-sm-4'
          target={Object.values(pdfs)[i]}
          classesImage='img-fluid img-invitation'
          image={Object.values(images)[i]}
          alt='obrazek'
        />
      )
    }
    for (let i = 5; i < Object.keys(images).length; i++) {
      ImagesComponents.push(
        <Image
          classesDiv=''
          classesLink='col-12 col-sm-4'
          target={Object.values(images)[i]}
          classesImage='img-fluid'
          image={Object.values(images)[i]}
          alt='obrazek'
        />
      )
    }

    return (
      <React.Fragment>
        <h1>Semináře</h1>
        <div className='text-center'>
          <p>
            Již každoročně pořádáme semináře zaměřené na hygienu a výživu
            dojného skotu. Přednášející jsou odborníci z Českých i zahraničních
            firem a českých univerzit.
          </p>
          <div className='row'>
            <h2 className='col-12'>NADCHÁZEJÍCÍ SEMINÁŘ - NEPOMUK</h2>
            <p className='col-12'>
              Program a přihláška ke{' '}
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={pdfs['pozvanka-19.pdf']}
              >
                stažení
              </a>
              .
            </p>
            {ImagesComponents[4]}
          </div>
          <br />
          <div className='row'>
            <h2 className='col-12'>Sušice</h2>
            <p className='col-12'>
              2018 - Nový přístup k harmonické léčbě a odčervení koní s Ing.
              Petrou Sedlákovou
            </p>
            {ImagesComponents[14]}
            {ImagesComponents[15]}
            {ImagesComponents[16]}
            {ImagesComponents[3]}
          </div>
          <br />
          <div className='row'>
            <h2 className='col-12'>Nepomuk</h2>
            <p className='col-12'>2018 - již 8. ročník odborných školení</p>
            {ImagesComponents[11]}
            {ImagesComponents[12]}
            {ImagesComponents[13]}
            {ImagesComponents[2]}
          </div>
          <br />
          <div className='row'>
            <h2 className='col-12'>Nepomuk</h2>
            <p className='col-12'>2017 - již 7. ročník odborných školení</p>
            {ImagesComponents[8]}
            {ImagesComponents[9]}
            {ImagesComponents[10]}
            {ImagesComponents[1]}
          </div>
          <br />
          <div className='row'>
            <h2 className='col-12'>Nepomuk</h2>
            <p className='col-12'>2016 - již 6. ročník odborných školení</p>
            {ImagesComponents[5]}
            {ImagesComponents[6]}
            {ImagesComponents[7]}
            {ImagesComponents[0]}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

class Vystavy extends Component {
  render () {
    const images = importAll(
      require.context(
        '../../../assets/img/events/expositions/',
        false,
        /^\.\/.*\.jpg$/
      )
    )

    let ImagesComponents = []
    for (let i = 0; i < Object.keys(images).length; i++) {
      ImagesComponents.push(
        <Image
          classesDiv=''
          classesLink='col-6'
          target={Object.values(images)[i]}
          classesImage='img-fluid'
          image={Object.values(images)[i]}
          alt='obrazek'
        />
      )
    }

    return (
      <React.Fragment>
        <h1>Výstavy</h1>
        <div className='text-center'>
          <p>
            Již tradičně se účastníme zemědělských výstav v Kralovicích –
            Hadačka, v Mrákově a na Polním dnu – Alimex Nezvěstice, Žákavá.
          </p>
          <br />
          <div className='row'>
            <h2 className='col-12'>Kralovice</h2>
            <p className='col-12'>
              2018 - Kralovická zemědělská výstava na Hadačce
            </p>
            {ImagesComponents[8]}
            {ImagesComponents[9]}
            {ImagesComponents[10]}
            {ImagesComponents[11]}
          </div>
          <br />
          <div className='row'>
            <h2 className='col-12'>Kralovice</h2>
            <p className='col-12'>
              2017 - Kralovická zemědělská výstava na Hadačce
            </p>
            {ImagesComponents[6]}
            {ImagesComponents[7]}
          </div>
          <br />
          <div className='row'>
            <h2 className='col-12'>Žákavá</h2>
            <p className='col-12'>2017 - Chovatelský den Nezvěstice</p>
            {ImagesComponents[4]}
            {ImagesComponents[5]}
          </div>
          <br />
          <div className='row'>
            <h2 className='col-12'>Kralovice</h2>
            <p className='col-12'>
              2016 - Kralovická zemědělská výstava na Hadačce
            </p>
            {ImagesComponents[0]}
            {ImagesComponents[1]}
            {ImagesComponents[2]}
            {ImagesComponents[3]}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

class Rady extends Component {
  render () {
    const images = importAll(
      require.context(
        '../../../assets/img/events/',
        false,
        /sanitacni-rady\.jpg$/
      )
    )
    const pdfs = importAll(
      require.context(
        '../../../assets/pdf/events/',
        false,
        /sanitacni-rady\.pdf$/
      )
    )
    return (
      <React.Fragment>
        <h1>Sanitační Řády</h1>
        <p className='text-center'>
          Pro naše stálé zákazníky jsme schopni vytvořit sanitační řády na míru
          jejich hygienického programu.
        </p>
        <div className='row'>
          <Image
            classesLink='col-12 offset-md-2 col-md-8'
            target={Object.values(pdfs)[0]}
            classesImage='img-fluid'
            image={Object.values(images)[0]}
            alt='sanitacni rady'
          />
        </div>
      </React.Fragment>
    )
  }
}

const skoleni = () => {
  return (
    <React.Fragment>
      <h1>Školení</h1>
      <p>
        Pro zájemce a dlouhodobé klienty pořádáme odborná školení pro
        zootechniky a obsluhu dojírny. Školení jsou zaměřená na vhodné postupy
        dojení skotu a manipulaci s dezinfekčními přípravky, tak aby se daly
        aplikovat na Vaši farmu. Školení zajišťují odborní poradci Ing. J.
        Klouda PhD. a Ing. P. Oliva, kteří vycházejí z dlouhodobé praxe na
        farmách a současných hygienických norem. V případě že máte zájem o
        školení na Vašem podniku, neváhejte nás kontaktovat.
      </p>
    </React.Fragment>
  )
}

export {
  about,
  Partners,
  references,
  shipping,
  Contacts,
  Seminare,
  Vystavy,
  Rady,
  skoleni
}
