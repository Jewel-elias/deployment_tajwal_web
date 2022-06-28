 import './ourServices.scss'
 function ourServices(){
  document.body.style.background = 'none';
    return(
        <div>
<section class="amazing_feature">
      <div class="container">

            <div class="row">
                <div class="col-md-12 text-center heading-main">
                    <h2 class="heading">خدماتنا</h2>
                    <div class="separator"><i class="fa fa-home below-line-about-icon"></i></div>

                </div>
            </div>      
        <div class="row">         
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single_feature">
              <div class="feature_icon"><i class="far fa-heart"></i></div>
              <h3>Made with Love</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Cras.</p>  
            </div>
          </div>
          {/* <!-- END COL-->                */}
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single_feature">
              <div class="feature_icon"><i class="fa fa-magic"></i></div>
              <h3>Powerful</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Cras.</p>    
            </div>
          </div>
          {/* <!-- END COL-->          */}
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single_feature">
              <div class="feature_icon"><i class="fas fa-location-arrow"></i></div>
              <h3>Send Messages</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Cras.</p>  
            </div>
          </div>
          {/* <!-- END COL-->              */}
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single_feature">
              <div class="feature_icon"><i class="far fa-money-bill-alt"></i></div>
              <h3>Save Money</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Cras.</p>  
            </div>
          </div>
          {/* <!-- END COL-->          */}
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single_feature">
              <div class="feature_icon"><i class="fa fa-cog"></i></div>
              <h3>Customizable</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Cras.</p>  
            </div>
          </div>
          {/* <!-- END COL-->          */}
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single_feature">
              <div class="feature_icon"><i class="fa fa-database"></i></div>
              <h3>Data Report</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Cras.</p>  
            </div>
          </div>
          {/* <!-- END COL-->            */}
        </div>
        {/* <!--- END ROW -->      */}
      </div>
      {/* <!--- END CONTAINER -->    */}
    </section>
        </div>
    )
 }
 export default ourServices