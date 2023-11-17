import "./App.css";
import React from 'react'



function Arama({aramaMetni, onSearch}){

  return(  
  <div>
     <label htmlFor="arama">Ara: </label>
     <input id="arama" type="text" onChange={onSearch} value={aramaMetni}/>

     <p>
     </p>
  </div>
  )
}

function Yazi({id,url,baslik,yazar,yorum_sayisi,puan}){
  return(
  <li>
    <span>
      <a href={url}>{baslik}</a>, 
    </span>
    <span><b>Yazar:</b> {yazar}, </span>
    <span><b>Yorum Sayısı:</b> {yorum_sayisi}, </span>
    <span><b>Puan:</b> {puan}</span>
  </li>


  )

}



function Liste(props){
  return( 
  <ul>
    {props.yazilar.map(function(yazi){
      return (
      <Yazi key = {yazi.id} {...yazi}/>

      );
      })}

  </ul>




  )


}

function App() {
  const [aramaMetni,setAramaMetni] = React.useState(localStorage.getItem("aranan")||"React");
  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Sinan Yüksel",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Asım Yüksel",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },
    
    // Ekstra 
    
    {
      baslik: "Midnight Robber",
      url: "https://www.goodreads.com/book/show/71409.Midnight_Robber",
      yazar: "Nalo Hopkinson",
      yorum_sayisi: 3,
      puan: 6,
      id: 2,
    },
    {
      baslik: "Latin Amerika",
      url: "https://www.kolektifkitap.com/product-page/latin-amerika-okan-okumu%C5%9F",
      yazar: "Okan Okumuş",
      yorum_sayisi: 6,
      puan: 8,
      id: 3,
    },
    {
      baslik: "Sızma Sanatı",
      url: "https://1000kitap.com/kitap/sizma-sanati--37689",
      yazar: "Kevin David Mitnick",
      yorum_sayisi: 5,
      puan: 6,
      id: 4,
    },
    {
      baslik: "SQL EĞİTİM KİTABI",
      url: "https://www.bkmkitap.com/sql-egitim-kitabi",
      yazar: "Murat Yücedağ",
      yorum_sayisi: 4,
      puan: 5,
      id: 5,
    },



  ];
  const arananYazilar = yaziListesi.filter(
    function (yazi){
      return yazi.baslik.includes(aramaMetni);
    }

  );

  function handleSearch(event){ 
    console.log(event.target.value);
    setAramaMetni(event.target.value)
   
  }
  React.useEffect(()=>{
    localStorage.setItem("aranan",aramaMetni);
  },[aramaMetni]);
  return (
    <div>
      <h1>Yazılar</h1>

      <Arama aramaMetni={aramaMetni} onSearch = {handleSearch}/> 
      <strong> {aramaMetni} aranıyor...</strong> 
      <hr />

      <Liste yazilar={arananYazilar}/>


    </div>
  );

}

export default App;
