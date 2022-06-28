import './startRate.scss';
import $ from 'jquery';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useBetween } from 'use-between';

function StartRate(props) {
    const state = useSelector((state) => state.data);
    const { dropdownOpenLogin, setdropdownOpenLogin } = useBetween(state.useShareState);
    const { isUserLogin, setisUserLogin } = useBetween(state.useShareState);
    const { idItem, setidItem } = useBetween(state.useShareState);


    function dropDownLogin() {
        // alert(dropdownOpenLogin)
        if (isUserLogin == false)
        {setdropdownOpenLogin(true); alert(dropdownOpenLogin)}
    }

    const [star1, setStar1] = useState([]);
    const [star2, setStar2] = useState([]);
    const [star3, setStar3] = useState([]);
    const [star4, setStar4] = useState([]);
    const [star5, setStar5] = useState([]);

    state.stores.features.forEach((store, i) => {
        star1.push(store.properties.str1);
        star2.push(store.properties.str2);
        star3.push(store.properties.str3);
        star4.push(store.properties.str4);
        star5.push(store.properties.str5);
    })
    
    function st5(id) {
       
    if(star5[id]==false)
    {
        star1[id] = true;
        var st1 = [...star1];
        setStar1(st1);
       

        star2[id] = true;
        var st2 = [...star2];
        setStar2(st2);

        star3[id] = true;
        var st3 = [...star3];
        setStar3(st3);

        star4[id] = true;
        var st4 = [...star4];
        setStar4(st4);

        star5[id] = true;
        var st5 = [...star5];
        setStar5(st5);
        

    }
    else{
        star1[id] = false;
        var st1 = [...star1];
        setStar1(st1);

        star2[id] = false;
        var st2 = [...star2];
        setStar2(st2);

        star3[id] = false;
        var st3 = [...star3];
        setStar3(st3);

        star4[id] = false;
        var st4 = [...star4];
        setStar4(st4);

        star5[id] = false;
        var st5 = [...star5];
        setStar5(st5);
        
    }
    dropDownLogin();
    }
    function st4(id) {
       
       
        if(star4[id]==false||(star4[id]==true && star5[id]==true))
        {
            star1[id] = true;
            var st1 = [...star1];
            setStar1(st1);
    
            star2[id] = true;
            var st2 = [...star2];
            setStar2(st2);
    
            star3[id] = true;
            var st3 = [...star3];
            setStar3(st3);
    
            star4[id] = true;
            var st4 = [...star4];
            setStar4(st4);
            
    
        }
        else{
            star1[id] = false;
            var st1 = [...star1];
            setStar1(st1);
    
            star2[id] = false;
            var st2 = [...star2];
            setStar2(st2);
    
            star3[id] = false;
            var st3 = [...star3];
            setStar3(st3);
    
            star4[id] = false;
            var st4 = [...star4];
            setStar4(st4);
    
           
        }  
        star5[id] = false;
        var st5 = [...star5];
        setStar5(st5);
        dropDownLogin();
        
      }
      function st3(id) {
       
        if(star3[id]==false||(star3[id]==true&&star4[id]==true))
        {
            star1[id] = true;
            var st1 = [...star1];
            setStar1(st1);
    
            star2[id] = true;
            var st2 = [...star2];
            setStar2(st2);
    
            star3[id] = true;
            var st3 = [...star3];
            setStar3(st3);
            
    
        }
        else{
            star1[id] = false;
            var st1 = [...star1];
            setStar1(st1);
    
            star2[id] = false;
            var st2 = [...star2];
            setStar2(st2);
    
            star3[id] = false;
            var st3 = [...star3];
            setStar3(st3);
    
           
        }  
        star5[id] = false;
        var st5 = [...star5];
        setStar5(st5);
        star4[id] = false;
        var st4 = [...star4];
        setStar4(st4);
        dropDownLogin();
      }
    
    function st2(id) {
    
      if(star2[id]==false||(star2[id]==true&&star3[id]==true))
      {
          star1[id] = true;
          var st1 = [...star1];
          setStar1(st1);
  
          star2[id] = true;
          var st2 = [...star2];
          setStar2(st2);
          
  
      }
      else{
          star1[id] = false;
          var st1 = [...star1];
          setStar1(st1);
  
          star2[id] = false;
          var st2 = [...star2];
          setStar2(st2);
         
      }  
      star5[id] = false;
      var st5 = [...star5];
      setStar5(st5);
      star4[id] = false;
      var st4 = [...star4];
      setStar4(st4);
      star3[id] = false;
      var st3 = [...star3];
      setStar3(st3);
      dropDownLogin();
    }

    function st1(id) {
       
        if(star1[id]==false||(star1[id]==true&&star2[id]==true))
        {
            star1[id] = true;
            var st1 = [...star1];
            setStar2(st1);
            
    
        }
        else{
            star1[id] = false;
            var st1 = [...star1];
            setStar2(st1);
    
        }  
        star5[id] = false;
        var st5 = [...star5];
        setStar5(st5);
        star4[id] = false;
        var st4 = [...star4];
        setStar4(st4);
        star3[id] = false;
        var st3 = [...star3];
        setStar3(st3);
        star2[id] = false;
        var st2 = [...star2];
        setStar2(st2);
        dropDownLogin();
       
      }
  
      const starList = state.stores.features.length ? (
        state.stores.features.map(item => {
            if(item.properties.id==props.id){
            return (
                
            <div className="wrapper">
            <input name="ratingRadio" type="radio" id="st1" value="1" className='star5'></input>

            <label for="st1" className=' str star5' value="1"  onClick={()=>st5(item.properties.id)}
                style={{ color: star5[props.id] == true && isUserLogin == true ? '#FC0' : 'rgb(179, 178, 178)' }} >

            </label>

            <input name="ratingRadio" type="radio" id="st2" value="2" className='star4'  />
            <label for="st2" className='str star4' value="2" onClick={()=>st4(item.properties.id)}
                style={{ color: star4[props.id] == true && isUserLogin == true ? '#FC0' : 'rgb(179, 178, 178)' }}>

            </label>

            <input name="ratingRadio" type="radio" id="st3" value="3" className='star3'  />
            <label for="st3" className='str star3' value="3" onClick={()=>st3(item.properties.id)}
                style={{ color: star3[props.id] == true && isUserLogin == true ? '#FC0' : 'rgb(179, 178, 178)' }}>

            </label>

            <input name="ratingRadio" type="radio" id="st4" value="4" className='star2'  />
            <label for="st4" className='str star2' value="4" onClick={()=>st2(item.properties.id)}
                style={{ color: star2[props.id] == true && isUserLogin == true ? '#FC0' : 'rgb(179, 178, 178)' }}>

            </label>
            <input name="ratingRadio" type="radio" id="st5" value="5" className='star1'  />
            <label for="st5" className='str star1' value="5" onClick={()=>st1(item.properties.id)}
                style={{ color: star1[props.id] == true && isUserLogin == true ? '#FC0' : 'rgb(179, 178, 178)' }}>

            </label>
        </div>
            )}
        })):(<p></p>)
    return (
    
        <div>
{starList}

        </div>

    )
}

export default StartRate;