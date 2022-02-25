            // Scripts

(function (global) {

      var camunited = {};

       // Navigations
      var homeHtml = "assets/snippets/home-snippet.html";
      var gifloadingHtml = "assets/snippets/gif-snippets.html";
      var productsHtml = "navigations/Products/index.html";
      var assetsHtml = "navigations/Assets/index.html";
        var expertisesHtml = "navigations/Assets/Expertises/index.html";
        var applicationsHtml = "navigations/Assets/Applications/index.html";
        var intelligencesHtml = "navigations/Assets/Intelligences/index.html";
      var servicesHtml = "navigations/Services//index.html";
        var webdevelopmentsHtml = "navigations/Services/Web-Developments/index.html";
        var computingprogrammingsHtml = "navigations/Services/Computing-Programmings/index.html";
        var ethicalhackingsHtml = "navigations/Services/Ethical-Hackings/index.html";
        

       // Footer Nav Sites
      var developersHtml = "sites/Developers/index.html";
      var careersHtml = "sites/Careers/index.html";
      var termspolicyHtml = "sites/Terms-Policy/index.html";
      var creditsHtml = "sites/Credits/index.html";
      var faqsHtml = "sites/FAQs/index.html";
      var aboutHtml = "sites/About/index.html";

      // Convenience function for inserting innerHTML for 'select'
      var insertHtml = function (selector, html) {
            var targetElem = document.querySelector(selector);
            targetElem.innerHTML = html;
      };

            // Show loading icon inside element identified by 'selector'.
      var showLoading = function (selector) {
            var html = global.$camunited.$gifloadingdbs
            insertHtml(selector, html);
      };


      var showhomeHtml = function (selector) {
            var html = global.$camunited.$homedbs
            insertHtml(selector, html);
      };


            // Navigation Objects
      var switchHomepageToActive = function () {
        // Remove 'active' from home button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;
        

        // Add 'active' to menu button if not already there
        classes = document.querySelector("#HomepageNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#HomepageNav").className = classes;
        }
      };


      var switchProductsNavToActive = function () {
        // Remove 'active' from home button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;
        

        // Add 'active' to menu button if not already there
        classes = document.querySelector("#ProductspageNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#ProductspageNav").className = classes;
        }
      };


      var switchAssetsNavToActive = function () {
        // Remove 'active' from home button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;
        

        // Add 'active' to menu button if not already there
        classes = document.querySelector("#AssetspageNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#AssetspageNav").className = classes;
        }
      };


      var switchExpertisesNavToActive = function () {
        // Remove 'active' from home button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;
        

        // Add 'active' to menu button if not already there
        classes = document.querySelector("#AssetspageNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#AssetspageNav").className = classes;
        }
      };


      var switchApplicationsNavToActive = function () {
        // Remove 'active' from home button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;
        

        // Add 'active' to menu button if not already there
        classes = document.querySelector("#AssetspageNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#AssetspageNav").className = classes;
        }
      };


      var switchIntelligencesNavToActive = function () {
        // Remove 'active' from home button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;
        

        // Add 'active' to menu button if not already there
        classes = document.querySelector("#AssetspageNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#AssetspageNav").className = classes;
        }
      };


      var switchServicesNavToActive = function () {
        // Remove 'active' from home button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;
        

        // Add 'active' to menu button if not already there
        classes = document.querySelector("#ServicespageNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#ServicespageNav").className = classes;
        }
      };


      var switchWebDevelopmentsNavToActive = function () {
        // Remove 'active' from home button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;
        

        // Add 'active' to menu button if not already there
        classes = document.querySelector("#ServicespageNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#ServicespageNav").className = classes;
        }
      };


      var switchComputingProgrammingsNavToActive = function () {
        // Remove 'active' from home button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;
        

        // Add 'active' to menu button if not already there
        classes = document.querySelector("#ServicespageNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#ServicespageNav").className = classes;
        }
      };


      var switchEthicalHackingsNavToActive = function () {
        // Remove 'active' from home button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;
        

        // Add 'active' to menu button if not already there
        classes = document.querySelector("#ServicespageNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#ServicespageNav").className = classes;
        }
      };

            //Footer Navigation
      // Remove the class 'active' from home and switch to Menu button
      var switchDevelopersNavToActive = function () {

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;


        // Add 'active' to menu button if not already there
        classes = document.querySelector("#developersNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#developersNav").className = classes;
        }
      };



      // Remove the class 'active' from home and switch to Menu button
      var switchCareersNavToActive = function () {

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;


        // Add 'active' to menu button if not already there
        classes = document.querySelector("#careersNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#careersNav").className = classes;
        }
      };


      // Remove the class 'active' from home and switch to Menu button
      var switchTermsPolicyNavToActive = function () {

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;


        // Add 'active' to menu button if not already there
        classes = document.querySelector("#termspolicyNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#termspolicyNav").className = classes;
        }
      };


      // Remove the class 'active' from home and switch to Menu button
      var switchCreditsNavToActive = function () {

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;


        // Add 'active' to menu button if not already there
        classes = document.querySelector("#creditsNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#creditsNav").className = classes;
        }
      };


      // Remove the class 'active' from home and switch to Menu button
      var switchFAQsNavToActive = function () {

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;


        // Add 'active' to menu button if not already there
        classes = document.querySelector("#faqsNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#faqsNav").className = classes;
        }
      };


      // Remove the class 'active' from home and switch to Menu button
      var switchAboutNavToActive = function () {

        // Remove 'active' from Home button
        var classes = document.querySelector("#HomepageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#HomepageNav").className = classes;

        // Remove 'active' from Products button
        var classes = document.querySelector("#ProductspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ProductspageNav").className = classes;

        // Remove 'active' from Assets button
        var classes = document.querySelector("#AssetspageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#AssetspageNav").className = classes;

        // Remove 'active' from Services button
        var classes = document.querySelector("#ServicespageNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#ServicespageNav").className = classes;

        // Remove 'active' from DevelopersNav button
        var classes = document.querySelector("#developersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#developersNav").className = classes;

        // Remove 'active' from careersNav button
        var classes = document.querySelector("#careersNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#careersNav").className = classes;

        // Remove 'active' from termspolicyNav button
        var classes = document.querySelector("#termspolicyNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#termspolicyNav").className = classes;

        // Remove 'active' from creditsNav button
        var classes = document.querySelector("#creditsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#creditsNav").className = classes;

        // Remove 'active' from faqsNav button
        var classes = document.querySelector("#faqsNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#faqsNav").className = classes;

        // Remove 'active' from aboutNav button
        var classes = document.querySelector("#aboutNav").className;
        classes = classes.replace(new RegExp(" active", "g"), "");
        document.querySelector("#aboutNav").className = classes;


        // Add 'active' to menu button if not already there
        classes = document.querySelector("#aboutNav").className;
        if (classes.indexOf("active") == -1) {
          classes += " active";
          document.querySelector("#aboutNav").className = classes;
        }
      };



      // On page load (before images or CSS)
      document.addEventListener("DOMContentLoaded", function (event) {

            // On first load, show home view DOMLoaded
            showLoading("#main-jumbotron");

            $LocalajaxUtils = $ajaxUtils //For changing scope

            // localshowhomeHtml() = showhomeHtml();


            $ajaxUtils.sendGetRequest(
              gifloadingHtml,
              function (responseText) {
                  var gifloadingdbs = responseText;
                  global.$camunited.$gifloadingdbs = gifloadingdbs
                document.querySelector("#main-jumbotron")
                  .innerHTML = gifloadingdbs;
              },
              false);

            $ajaxUtils.sendGetRequest(
              homeHtml,
              function (responseText) {
                  var homedbs = responseText;
                  global.$camunited.$homedbs = homedbs
                document.querySelector("#main-jumbotron")
                  .innerHTML = homedbs;
              },
              false);



              // Navigations Objects

            document.querySelector("#ProductspageNav")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchProductsNavToActive();

                // Call server to get the name
                $LocalajaxUtils
                  .sendGetRequest(productsHtml, 
                    function (responseText) {
                      var productsnavdbs = responseText;
                      global.$camunited.$productsnavdbs = productsnavdbs
                      document.querySelector("#main-jumbotron")
                        .innerHTML = productsnavdbs;
                    },
                    false);
            });
                       // Empty 

            // document.querySelector("#AssetspageNav")
            //   .addEventListener("click", function () {

            //     showLoading("#main-jumbotron");
            //     switchAssetsNavToActive();

            //     // Call server to get the name
            //     $LocalajaxUtils
            //       .sendGetRequest(assetsHtml, 
            //         function (responseText) {
            //           var assetsnavdbs = responseText;
            //           global.$camunited.$assetsnavdbs = assetsnavdbs
            //           document.querySelector("#main-jumbotron")
            //             .innerHTML = assetsnavdbs;
            //         },
            //         false);
            // });



              // Dropdown
            document.querySelector("#expertisesNav")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchExpertisesNavToActive();

                // Call server to get the name
                $LocalajaxUtils
                  .sendGetRequest(expertisesHtml, 
                    function (responseText) {
                      var expertisesnavdbs = responseText;
                      global.$camunited.$expertisesnavdbs = expertisesnavdbs
                      document.querySelector("#main-jumbotron")
                        .innerHTML = expertisesnavdbs;
                    },
                    false);
            });

            document.querySelector("#applicationsNav")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchApplicationsNavToActive();

                // Call server to get the name
                $LocalajaxUtils
                  .sendGetRequest(applicationsHtml, 
                    function (responseText) {
                      var applicationsnavdbs = responseText;
                      global.$camunited.$applicationsnavdbs = applicationsnavdbs
                      document.querySelector("#main-jumbotron")
                        .innerHTML = applicationsnavdbs;
                    },
                    false);
            });

            document.querySelector("#intelligencesNav")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchIntelligencesNavToActive();

                // Call server to get the name
                $LocalajaxUtils
                  .sendGetRequest(intelligencesHtml, 
                    function (responseText) {
                      var intelligencesnavdbs = responseText;
                      global.$camunited.$intelligencesnavdbs = intelligencesnavdbs
                      document.querySelector("#main-jumbotron")
                        .innerHTML = intelligencesnavdbs;
                    },
                    false);
            });
              // End Dropdown


                      // Empty

            // document.querySelector("#ServicespageNav")
            //   .addEventListener("click", function () {

            //     showLoading("#main-jumbotron");
            //     switchServicesNavToActive();

            //     // Call server to get the name
            //     $LocalajaxUtils
            //       .sendGetRequest(servicesHtml, 
            //         function (responseText) {
            //           var servicesnavdbs = responseText;
            //           global.$camunited.$intelligencesnavdbs = servicesnavdbs
            //           document.querySelector("#main-jumbotron")
            //             .innerHTML = servicesnavdbs;
            //         },
            //         false);
            // });


                // Dropdown
            document.querySelector("#webdevelopmentsNav")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchWebDevelopmentsNavToActive();

                // Call server to get the name
                $LocalajaxUtils
                  .sendGetRequest(webdevelopmentsHtml, 
                    function (responseText) {
                      var webdevelopmentsnavdbs = responseText;
                      global.$camunited.$webdevelopmentsnavdbs = webdevelopmentsnavdbs
                      document.querySelector("#main-jumbotron")
                        .innerHTML = webdevelopmentsnavdbs;
                    },
                    false);
            });

            document.querySelector("#computingprogrammingsNav")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchComputingProgrammingsNavToActive();

                // Call server to get the name
                $LocalajaxUtils
                  .sendGetRequest(computingprogrammingsHtml, 
                    function (responseText) {
                      var computingprogrammingsnavdbs = responseText;
                      global.$camunited.$computingprogrammingsnavdbs = computingprogrammingsnavdbs
                      document.querySelector("#main-jumbotron")
                        .innerHTML = computingprogrammingsnavdbs;
                    },
                    false);
            });

            document.querySelector("#ethicalhackingsNav")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchEthicalHackingsNavToActive();

                // Call server to get the name
                $LocalajaxUtils
                  .sendGetRequest(ethicalhackingsHtml, 
                    function (responseText) {
                      var ethicalhackingsnavdbs = responseText;
                      global.$camunited.$ethicalhackingsnavdbs = ethicalhackingsnavdbs
                      document.querySelector("#main-jumbotron")
                        .innerHTML = ethicalhackingsnavdbs;
                    },
                    false);
            });
              // End Dropdown


              // Footer Navigation

            document.querySelector("#developersNav")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchDevelopersNavToActive();

                // Call server to get the name
                $LocalajaxUtils
                  .sendGetRequest(aboutHtml, 
                    function (responseText) {
                      var developersnavdbs = responseText;
                      global.$camunited.$developersnavdbs = developersnavdbs
                      document.querySelector("#main-jumbotron")
                        .innerHTML = developersnavdbs;
                    },
                    false);
            });

            document.querySelector("#careersNav")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchCareersNavToActive();

                // Call server to get the name
                $LocalajaxUtils
                  .sendGetRequest(careersHtml, 
                    function (responseText) {
                      var careersnavdbs = responseText;
                      global.$camunited.$careersnavdbs = careersnavdbs
                      document.querySelector("#main-jumbotron")
                        .innerHTML = careersnavdbs;
                    },
                    false);
            });

            document.querySelector("#termspolicyNav")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchTermsPolicyNavToActive();

                // Call server to get the name
                $LocalajaxUtils
                  .sendGetRequest(termspolicyHtml, 
                    function (responseText) {
                      var termspolicynavdbs = responseText;
                      global.$camunited.$termspolicynavdbs = termspolicynavdbs
                      document.querySelector("#main-jumbotron")
                        .innerHTML = termspolicynavdbs;
                    },
                    false);
            });

            document.querySelector("#creditsNav")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchCreditsNavToActive();

                // Call server to get the name
                $LocalajaxUtils
                  .sendGetRequest(creditsHtml, 
                    function (responseText) {
                      var creditsnavdbs = responseText;
                      global.$camunited.$creditsnavdbs = creditsnavdbs
                      document.querySelector("#main-jumbotron")
                        .innerHTML = creditsnavdbs;
                    },
                    false);
            });

            document.querySelector("#faqsNav")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchFAQsNavToActive();

                // Call server to get the name
                $LocalajaxUtils
                  .sendGetRequest(faqsHtml, 
                    function (responseText) {
                      var faqsnavdbs = responseText;
                      global.$camunited.$faqsnavdbs = faqsnavdbs
                      document.querySelector("html")
                        .innerHTML = faqsnavdbs;
                    },
                    false);
            });

            document.querySelector("#aboutNav")
              .addEventListener("click", function () {

                showLoading("#main-jumbotron");
                switchAboutNavToActive();

                // Call server to get the name
                $LocalajaxUtils
                  .sendGetRequest(aboutHtml, 
                    function (responseText) {
                      var aboutnavdbs = responseText;
                      global.$camunited.$aboutnavdbs = aboutnavdbs
                      document.querySelector("#main-jumbotron")
                        .innerHTML = aboutnavdbs;
                    },
                    false);
            });

            document.querySelector("#HomepageNav")  
              .addEventListener("click", function () {
                showLoading("#main-jumbotron");
                showhomeHtml("#main-jumbotron");
                switchHomepageToActive();
            });

            document.querySelector("#header-brand")  
              .addEventListener("click", function () {
                showLoading("#main-jumbotron");
                showhomeHtml("#main-jumbotron");
                switchHomepageToActive();
            });

            document.querySelector("#navbar-brand-branding")  
              .addEventListener("click", function () {
                showLoading("#main-jumbotron");
                showhomeHtml("#main-jumbotron");
                switchHomepageToActive();
            });

      });

      global.$camunited = camunited;

})(window);

      // Fixing Mobile Nav Menu Automatic Collapse

// $(function () { // Same as document.addEventListener("DOMContentLoaded"...

//   // Same as document.querySelector("#navbar-toggler").addEventListener("blur",...
//   $("#navbarToggle").blur(function (event) {
//     var screenWidth = window.innerWidth;
//     if (screenWidth < 992) {
//       $("#offcanvasNavbar").collapse('hide');
//     }
//   });
//   // In Firefox and Safari, the click event doesn't retain the focus
//   // on the clicked button. Therefore, the blur event will not fire on
//   // user clicking somewhere else in the page and the blur event handler
//   // which is set up above will not be called.
//   // Refer to issue #28 in the repo.
//   // Solution: force focus on the element that the click event fired on
//   $("#navbarToggle").click(function (event) {
//     $(event.target).focus();
//   });
// });



