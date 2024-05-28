
let countdownElement = document.getElementById('countdown');
let countdownValue = 3; // Initial countdown value
let countdownInterval;
var onLivePage = document.querySelector(".real-on-live-page");

var launchMobile = document.querySelector(".add-icon-for-mobile-live-launch");
var launchIcon1 = document.querySelector("#Layer_1");
var launchLiveMobile = document.querySelector(".main-live-launching-page-for-phone-only-mobile-size");
var ProfileMobile = document.querySelector(".icon-profile-mobile");

var explorePageMobile = document.querySelector(".explore-page-mobile");
var exploreSearchMobile = document.querySelector("#search-trends");
var searchIconMobile = document.querySelector(".search-icon");

var homePageMobile = document.querySelector(".home-page");
var trendsLogo = document.querySelector(".trends-logo-menu");
var homeIconMobile = document.querySelector(".home-icon");

var mainLivePage = document.querySelector("#main-live-page");
var mainLiveIcon = document.querySelector(".main-live-icon");

var exploreIcon = document.querySelector(".explore-icon");

var profileIcon = document.querySelector(".profile-icon");

var messageTabPage = document.querySelector("#tablets-messaging-page");
var messageIcon =document.querySelector(".message-icon")

var launchIcon = document.querySelector(".launch-live");
var launchPage = document.querySelector(".main-live-launching-page")

var searchPage = document.querySelector(".search-page")
var searchIcon = document.querySelector(".search-icon")

var notificationIcon = document.querySelector(".notification-icon")
var notificationPage = document.querySelector("#notification-page")

var moreIcon = document.querySelector(".more-icon");
var morePage = document.querySelector(".more-popup-icon");

var homePath = document.querySelector(".home-path")
var homePage = document.querySelector(".home-page")

var searchPath = document.querySelector(".search-path");
var searchPage = document.querySelector(".search-page");

var notificationPath = document.querySelector(".notification-path");
var notificationPage = document.querySelector("#notification-page");

var explorePath = document.querySelector(".explore-path");
var explorePage = document.querySelector(".explore-page");

var livePath = document.querySelector(".live-path");
var livePage = document.querySelector("#main-live-page");

var profilePath = document.querySelector(".profile-path");
var profilePage = document.querySelector(".main-profile-page");

var messagePath = document.querySelector(".message-path");
var messagePage = document.querySelector(".main-messaging-page");

var launchPath = document.querySelector(".launch-path");
var launchPage = document.querySelector(".main-live-launching-page")

var morePath = document.querySelector(".more-path");
var morePage = document.querySelector(".more-popup-icon");

var inboxContainer = document.querySelector(".inbox-container");
var mobileMessagingPage = document.querySelector(".main-messaging-page-for-phone-only-mobile-size");
var bottomIconsRemoval = document.querySelector(".side-navigation-icons-layout")
var backIcon = document.querySelector(".back-icon");
var logoutContainer = document.querySelector(".logout-container");

var slidingCarousel = document.querySelectorAll(".slider");
var currentShowPage = document.querySelector(".current-liveshow-page")

var trendingBrands = document.querySelectorAll(".trending-brands");
var exploreLiveshow = document.querySelectorAll(".live-shows");

var buyingShow = document.querySelector(".current-liveshow-mobile-page-main");

var mainLivePage = document.querySelector(".main-live-page")
var RandomShow = document.querySelector(".random-liveshow");
var recommendedLiveshowList = document.querySelectorAll(".recommended-liveshow-contents")

var currentLiveShowPage = document.querySelector(".current-liveshow-page");
var tabHomeSlide = document.querySelectorAll(".slider");
var trendingBrands = document.querySelectorAll(".trending-brands");

var productUploadList = document.querySelectorAll(".product-upload");
var buyingContinuePopup = document.querySelector(".continue-popup");
var cancelContinue = document.querySelector(".continue-cancel");

var productLaunchBox = document.querySelector("#product-box-launchpage");
var uploadProductPopup = document.querySelector(".product-upload-popup");
var productFillUpBox = document.querySelectorAll(".fill-up")
var fillUPContainer = document.querySelector(".live-products")
var uploadCancel = document.querySelector(".x-upload-icon");

var brandMessageLinkup = document.querySelector(".message-linkup");
var chatAnchor = document.querySelector(".anchor-to-chat");

var leftScroll = document.querySelector(".left-scroll");
var rightScroll = document.querySelector(".right-scroll")

var leftCarousel = document.querySelector(".left-carousel");
var rightCarousel = document.querySelector(".right-carousel");
var currentCarousel = document.querySelector(".current-carousel");

function replaceSVG() {
    const isMobile = window.matchMedia('(max-width: 760px)').matches;

    if (isMobile) {
        if (launchMobile) {
            launchMobile.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="nav-icon" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24"><title>Launch live</title><path d="M17,12c0,.553-.448,1-1,1h-3v3c0,.553-.448,1-1,1s-1-.447-1-1v-3h-3c-.552,0-1-.447-1-1s.448-1,1-1h3v-3c0-.553,.448-1,1-1s1,.447,1,1v3h3c.552,0,1,.447,1,1Zm7-7v14c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V5C0,2.243,2.243,0,5,0h14c2.757,0,5,2.243,5,5Zm-2,0c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V5Z"/></svg>';
        }

        if (ProfileMobile) {
            ProfileMobile.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><g id="_01_align_center" data-name="01 align center"><path d="M21,24H19V18.957A2.96,2.96,0,0,0,16.043,16H7.957A2.96,2.96,0,0,0,5,18.957V24H3V18.957A4.963,4.963,0,0,1,7.957,14h8.086A4.963,4.963,0,0,1,21,18.957Z"/><path d="M12,12a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,12ZM12,2a4,4,0,1,0,4,4A4,4,0,0,0,12,2Z"/></g></svg>';
        }
    }

}
replaceSVG();

function startLiveStream() {
    if(countdownElement.style.display ==="none"){
        countdownElement.style.display ="flex" 
    } else{
        countdownElement.style.display ="flex" 
    }
    countdownInterval = setInterval(updateCountdown, 1300); // Update countdown every second
    updateCountdown();
     // Initial update
    // Add logic here to start the live stream after the countdown
}

function updateCountdown() {
    countdownElement.textContent = countdownValue;
    countdownValue--;

    if (countdownValue < 0) {
        clearInterval(countdownInterval); // Stop the countdown
        countdownElement.textContent = 'GO LIVE!';
        if(onLivePage.style.display ==="none"){
            onLivePage.style.display ="block"
        } else{
            onLivePage.style.display ="block"
        }
        
    }
}

function pageContents(){
    const mobileInteractiviness = window.matchMedia('(max-width: 760px)').matches 
    if(mobileInteractiviness){
        for(var i = 0; i < trendingBrands.length; i++){
            trendingBrands[i].addEventListener("click", function(){
                if(buyingShow.style.display ==="none"){
                    buyingShow.style.display ="block"
                    homePageMobile.style.display ="none" 
                } else{
                    buyingShow.style.display ="block"
                    homePageMobile.style.display ="none"
                }
                /*if(buyingShow.style.display ==="none"){
                  buyingShow.style.display ="block"
                 homePageMobile.style.display ="none" 
              } else{
                buyingShow.style.display ="block"
                  homePageMobile.style.display ="none" 
              }*/
            })
        }
        
        
        /*leftScroll.addEventListener("click", function(){
            currentCarousel.style.backgroundImage ="url('images/WhatsApp\ Image\ 2024-05-15\ at\ 3.22.12\ PM\ \(2\).jpeg')"
        })*/
       
        for(var i = 0; i < exploreLiveshow.length; i++){
            exploreLiveshow[i].addEventListener("click", function(){
                if(explorePageMobile.style.display ==="block"){
                    explorePageMobile.style.display ="none"
                    if(buyingShow.style.display ==="none"){
                        buyingShow.style.display ="block"
                    }
                }  else{
                    buyingShow.style.display ="block"
                    explorePageMobile.style.display ="none"
                }
            })
        }
        for(var i = 0; i < recommendedLiveshowList.length; i++){
            recommendedLiveshowList[i].addEventListener("click", function(){
                if(buyingShow.style.display ==="none"){
                    buyingShow.style.display ="block"
                    mainLivePage.style.display ="none"
                }
                else{
                    buyingShow.style.display ="block"
                    mainLivePage.style.display ="none"
                }
            })
        }

          

        document.addEventListener('DOMContentLoaded', function() {
            var buyingShow = document.querySelector(".current-liveshow-mobile-page-main");
            var RandomShow = document.querySelector(".random-liveshow");
            var mainLivePage = document.querySelector(".main-live-page")// Replace with your actual element ID
        
            if (!RandomShow) {
                return;
            }
            
            if (!buyingShow) {
                console.error('Element with id "buyingShow" not found.');
                return;
            }
        
            if (!mainLivePage) {
                console.error('Element with id "mainLivePage" not found.');
                return;
            }
        
            RandomShow.addEventListener('click', function() {
                if (buyingShow.style.display === 'none') {
                    buyingShow.style.display = 'block';
                    mainLivePage.style.display = 'none';
                } else {
                    buyingShow.style.display = 'block';
                    mainLivePage.style.display = 'none';
                }
            });
        });
       
        
        for(var k = 0; k < productUploadList .length; k++){
            productUploadList[k].addEventListener("click", function(){
                if(buyingContinuePopup.style.display ==="none"){
                    buyingContinuePopup.style.display ="flex"
                } else{
                    buyingContinuePopup.style.display ="flex"
                }
            })
        }
        if (cancelContinue) {
            cancelContinue.addEventListener("click", function() {
                if (buyingContinuePopup.style.display === "flex") {
                    buyingContinuePopup.style.display = "none";
                } else {
                    buyingContinuePopup.style.display = "none";
                }
            });
        } 
        function sideCarousel(){
            var leftScroll = document.querySelector(".left-scroll");
            var rightScroll = document.querySelector(".right-scroll")
            var leftCarousel = document.querySelector(".left-carousel");
            var rightCarousel = document.querySelector(".right-carousel");
            var currentCarousel = document.querySelector(".current-carousel");
        
            var images = [
                "images/WhatsApp Image 2024-05-15 at 3.22.12 PM (3).jpeg",
                "images/WhatsApp Image 2024-05-15 at 3.22.12 PM (2).jpeg",
                "images/WhatsApp Image 2024-05-15 at 3.22.12 PM.jpeg",
              ];
            
            var currentIndex = 0;
        
            currentCarousel.style.backgroundImage = "url('" + images[currentIndex] + "')";
        
            rightScroll.addEventListener("click", function() {
            currentIndex = (currentIndex + 1) % images.length;
            leftCarousel.style.backgroundImage = "url('" + images[currentIndex] + "')";
            currentCarousel.style.backgroundImage = "url('" + images[currentIndex] + "')";
            });
        
            leftScroll.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            rightCarousel.style.backgroundImage = "url('" + images[currentIndex] + "')";
            currentCarousel.style.backgroundImage = "url('" + images[currentIndex] + "')";
            });
        
        }
        sideCarousel();

/*
// */
    }
    
                
        
    
}
pageContents();




/*

function tabletsContents(){
    const tabletsInteractivity = window.matchMedia('(max-width: 991px) and (min-width: 761px)').matches;
    if (tabletsInteractivity) {

    searchIcon.addEventListener("click", function(){
        if(searchPage.style.display ==="none"){
           searchPage.style.display ="block";
            morePage.style.display ="none"
            notificationPage.style.display ="none"
        } else{
            searchPage.style.display ="none";
        }
    })

    backOrderIcon.style.display ="none" 

    notificationIcon.addEventListener("click", function(){
        if(notificationPage.style.display ==="none"){
            notificationPage.style.display ="block"
            morePage.style.display ="none"
            searchPage.style.display ="none";
        } else{
            notificationPage.style.display ="none"
        }
    })
    moreIcon.addEventListener("click", function(){
        if(morePage.style.display ==="none"){
            morePage.style.display ="block"
            if(searchPage.style.display ==="block"){
                searchPage.style.display ="none";
                morePage.style.display ="block"
            } if(notificationPage.style.display ==="block"){
                notificationPage.style.display ="none"
                morePage.style.display ="block"
            }
        }  else {
            morePage.style.display ="none"
        }
    })
    

    mainLiveIcon.addEventListener("click", function(){
       if( homePageMobile.style.display = "block"){
            homePageMobile.style.display = "none";
        }  if (mainLivePage.style.display ==="none") {
            mainLivePage.style.display = "grid";
        } if(explorePageMobile.style.display ==="grid"){
            explorePageMobile.style.display ="none"
        } if(mainProfilePage.style.display ==="grid"){
            mainProfilePage.style.display ="none"
        } if(messageTabPage.style.display ==="block"){
            messageTabPage.style.display ="none"
        } if(launchPage.style.display ==="block"){
            launchPage.style.display ="none"
        } if(currentLiveShowPage.style.display ==="block"){
            currentLiveShowPage.style.display ="none"
        } if(chatPageTablets.style.display ==="block"){
            chatPageTablets.style.display ="none"
        } if(settingsPage.style.display ==="block"){
            settingsPage.style.display ="none"
        } if(orderPage.style.display ==="grid"){
            orderPage.style.display ="none"
        } else {
            mainLivePage.style.display = "grid";
            explorePageMobile.style.display ="none"
            mainProfilePage.style.display ="none"
            launchPage.style.display ="none"
            messageTabPage.style.display ="none"
            currentLiveShowPage.style.display ="none"
            chatPageTablets.style.display ="none"
            settingsPage.style.display ="none"
            orderPage.style.display ="none"
            notificationPage.style.display ="none"
            searchPage.style.display ="none";
            morePage.style.display ="none"
        } 
       
    });
    homeIconMobile.addEventListener("click", function(){
        if(homePageMobile.style.display ==="none"){
            homePageMobile.style.display ="block"
            morePage.style.display ="none"
        } if (mainLivePage.style.display ==="grid") {
            mainLivePage.style.display = "none";
        } if(explorePageMobile.style.display ==="grid"){
            explorePageMobile.style.display ="none"
        } if(mainProfilePage.style.display ==="grid"){
            mainProfilePage.style.display ="none"
        } if(messageTabPage.style.display ==="block"){
            messageTabPage.style.display ="none"
        } if(launchPage.style.display ==="block"){
            launchPage.style.display ="none"
        } if(currentLiveShowPage.style.display ==="block"){
            currentLiveShowPage.style.display ="none"
        } if(chatPageTablets.style.display ==="block"){
            chatPageTablets.style.display ="none"
        } if(settingsPage.style.display ==="block"){
            settingsPage.style.display ="none"
        } if(orderPage.style.display ==="grid"){
            orderPage.style.display ="none"
        } else{
            homePageMobile.style.display ="block"
            mainLivePage.style.display = "none";
            explorePageMobile.style.display ="none"
            mainProfilePage.style.display ="none"
            launchPage.style.display ="none"
            messageTabPage.style.display ="none"
            currentLiveShowPage.style.display ="none"
            chatPageTablets.style.display ="none"
            settingsPage.style.display ="none"
            orderPage.style.display ="none"
            notificationPage.style.display ="none"
            searchPage.style.display ="none";
            morePage.style.display ="none"
        }
    })
    exploreIcon.addEventListener("click", function(){
        if( homePageMobile.style.display === "block"){
            homePageMobile.style.display = "none";
        } if(explorePageMobile.style.display ==="none"){
            explorePageMobile.style.display ="grid"
            morePage.style.display ="none"
        }  if (mainLivePage.style.display ==="grid") {
            mainLivePage.style.display = "none";
        } if(mainProfilePage.style.display ==="grid"){
            mainProfilePage.style.display ="none"
        } if(messageTabPage.style.display ==="block"){
            messageTabPage.style.display ="none"
        } if(launchPage.style.display ==="block"){
            launchPage.style.display ="none"
        }  if(currentLiveShowPage.style.display ==="block"){
            currentLiveShowPage.style.display ="none"
        } if(chatPageTablets.style.display ==="block"){
            chatPageTablets.style.display ="none"
        } if(settingsPage.style.display ==="block"){
            settingsPage.style.display ="none"
        } if(orderPage.style.display ==="grid"){
            orderPage.style.display ="none"
        } else{
            explorePageMobile.style.display ="grid"
            mainLivePage.style.display = "none";
            mainProfilePage.style.display ="none"
            launchPage.style.display ="none"
            homePageMobile.style.display = "none";
            messageTabPage.style.display ="none"
            currentLiveShowPage.style.display ="none"
            chatPageTablets.style.display ="none"
            settingsPage.style.display ="none"
            orderPage.style.display ="none"
            notificationPage.style.display ="none"
            searchPage.style.display ="none";
            morePage.style.display ="none"
        }
    })
    profileIcon.addEventListener("click", function(){
        if( homePageMobile.style.display === "block"){
            homePageMobile.style.display = "none";
        }if(explorePageMobile.style.display ==="grid"){
            explorePageMobile.style.display ="none"
        } if (mainLivePage.style.display ==="grid") {
            mainLivePage.style.display = "none";
        } if(mainProfilePage.style.display ==="none"){
            mainProfilePage.style.display ="grid"
            morePage.style.display ="none"
        } if(messageTabPage.style.display ==="block"){
            messageTabPage.style.display ="none"
        } if(launchPage.style.display ==="block"){
            launchPage.style.display ="none"
        }  if(currentLiveShowPage.style.display ==="block"){
            currentLiveShowPage.style.display ="none"
        } if(chatPageTablets.style.display ==="block"){
            chatPageTablets.style.display ="none"
        } if(settingsPage.style.display ==="block"){
            settingsPage.style.display ="none"
        } if(orderPage.style.display ==="grid"){
            orderPage.style.display ="none"
        } else{
            mainProfilePage.style.display ="grid"
            explorePageMobile.style.display ="none"
            mainLivePage.style.display = "none";
            homePageMobile.style.display = "none";
            launchPage.style.display ="none"
            messageTabPage.style.display ="none"
            currentLiveShowPage.style.display ="none"
            chatPageTablets.style.display ="none"
            settingsPage.style.display ="none"
            orderPage.style.display ="none"
            notificationPage.style.display ="none"
            searchPage.style.display ="none";
            morePage.style.display ="none"
        }
    })
    messageIcon.addEventListener("click", function(){
        if(messageTabPage.style.display ==="none"){
            messageTabPage.style.display ="block";
            morePage.style.display ="none"
        } if( homePageMobile.style.display === "block"){
            homePageMobile.style.display = "none";
        } if(explorePageMobile.style.display ==="grid"){
            explorePageMobile.style.display ="none"
        } if (mainLivePage.style.display ==="grid") {
            mainLivePage.style.display = "none";
        } if(mainProfilePage.style.display ==="grid"){
            mainProfilePage.style.display ="none"
        } if(launchPage.style.display ==="block"){
            launchPage.style.display ="none"
        } if(currentLiveShowPage.style.display ==="block"){
            currentLiveShowPage.style.display ="none"
        } if(chatPageTablets.style.display ==="block"){
            chatPageTablets.style.display ="none"
        } if(settingsPage.style.display ==="block"){
            settingsPage.style.display ="none"
        } if(orderPage.style.display ==="grid"){
            orderPage.style.display ="none"
        }  else{
            messageTabPage.style.display ="block";
            explorePageMobile.style.display ="none"
            mainLivePage.style.display = "none";
            homePageMobile.style.display = "none";
            launchPage.style.display ="none"
            mainProfilePage.style.display ="none"
            currentLiveShowPage.style.display ="none"
            chatPageTablets.style.display ="none"
            settingsPage.style.display ="none"
            orderPage.style.display ="none"
            notificationPage.style.display ="none"
            searchPage.style.display ="none";
            morePage.style.display ="none"
        }
    })
    launchIcon.addEventListener("click", function(){
        if( homePageMobile.style.display === "block"){
            homePageMobile.style.display = "none";
        } if(explorePageMobile.style.display ==="grid"){
            explorePageMobile.style.display ="none"
        } if (mainLivePage.style.display ==="grid") {
            mainLivePage.style.display = "none";
        } if(messageTabPage.style.display ==="block"){
            messageTabPage.style.display ="none"
        } if(launchPage.style.display ==="none"){
            launchPage.style.display ="block"
            morePage.style.display ="none"
        } if(currentLiveShowPage.style.display ==="block"){
            currentLiveShowPage.style.display ="none"
        } if(chatPageTablets.style.display ==="block"){
            chatPageTablets.style.display ="none"
        } if(settingsPage.style.display ==="block"){
            settingsPage.style.display ="none"
        } if(orderPage.style.display ==="grid"){
            orderPage.style.display ="none"
        }  else{
            launchPage.style.display ="block"
            explorePageMobile.style.display ="none"
            mainLivePage.style.display = "none";
            homePageMobile.style.display = "none";
            mainProfilePage.style.display ="none"
            messageTabPage.style.display ="none"
            currentLiveShowPage.style.display ="none"
            chatPageTablets.style.display ="none"
            settingsPage.style.display ="none"
            orderPage.style.display ="none"
            notificationPage.style.display ="none"
            searchPage.style.display ="none";
            morePage.style.display ="none"
        }
    })
    for(var i = 0; i < tabHomeSlide.length; i++){
        tabHomeSlide[i].addEventListener("click", function(){
            currentShow();
        })
    }
        for(var i = 0; i < trendingBrands.length; i++){
            trendingBrands[i].addEventListener("click", function(){
                currentShow();
            })
        }
        for(var i = 0; i < recommendedLiveshowList.length; i++){
            recommendedLiveshowList[i].addEventListener("click", function(){
                currentShow();
            })
        }
        RandomShow.addEventListener("click", function(){
            currentShow();
        })
        for(var i = 0; i < exploreLiveshow.length; i++){
            exploreLiveshow[i].addEventListener("click", function(){
                currentShow();
            })
        }
        for(var i = 0; i < chatInfo.length; i++){
            chatInfo[i].addEventListener("click", function(){
                 if(chatListPage.style.display ==="block"){
                    chatListPage.style.display ="none"
                } if(chatPageTablets.style.display ==="none"){
                    chatPageTablets.style.display ="block"
                    morePage.style.display ="none"
                } if( homePageMobile.style.display === "block"){
                    homePageMobile.style.display = "none";
                } if(currentLiveShowPage.style.display ==="block"){
                    currentLiveShowPage.style.display ="none"
                } if(explorePageMobile.style.display ==="grid"){
                    explorePageMobile.style.display ="none"
                } if (mainLivePage.style.display ==="grid") {
                    mainLivePage.style.display = "none";
                } if(launchPage.style.display ==="block"){
                    launchPage.style.display ="none"
                } if(mainProfilePage.style.display ==="grid"){
                    mainProfilePage.style.display ="none"
                } else{
                    chatPageTablets.style.display ="block"
                    chatListPage.style.display ="none"
                    homePageMobile.style.display = "none";
                    currentLiveShowPage.style.display ="none"
                    explorePageMobile.style.display ="none"
                    mainLivePage.style.display = "none";
                    launchPage.style.display ="none"
                    mainProfilePage.style.display ="none"
                    notificationPage.style.display ="none"
                    searchPage.style.display ="none";
                    morePage.style.display ="none"
                }
            })
        }
        function currentShow(){
            if( homePageMobile.style.display === "block"){
                homePageMobile.style.display = "none";
            } if(currentLiveShowPage.style.display ==="none"){
                currentLiveShowPage.style.display ="block"
                morePage.style.display ="none"
            } if(explorePageMobile.style.display ==="grid"){
                explorePageMobile.style.display ="none"
            } if (mainLivePage.style.display ==="grid") {
                mainLivePage.style.display = "none";
            } if(messageTabPage.style.display ==="block"){
                messageTabPage.style.display ="none"
            } if(launchPage.style.display ==="block"){
                launchPage.style.display ="none"
            } if(mainProfilePage.style.display ==="grid"){
                mainProfilePage.style.display ="none"
            } if(messageTabPage.style.display ==="block"){
                messageTabPage.style.display ="none"
            } else{
                homePageMobile.style.display = "none";
                currentLiveShowPage.style.display ="block"
                launchPage.style.display ="none"
                mainLivePage.style.display = "none";
                explorePageMobile.style.display ="none"
                messageTabPage.style.display ="none"
                mainProfilePage.style.display ="none"
                notificationPage.style.display ="none"
                searchPage.style.display ="none";
                morePage.style.display ="none"
            }
        }
        settingsbuttonTab.addEventListener("click", function(){
            if(settingsPage.style.display ==="none"){
                settingsPage.style.display ="block"
                morePage.style.display ="none"
                chatPageMobile.style.display ="none"
                currentLiveShowPage.style.display ="none"
            } if( homePageMobile.style.display === "block"){
                homePageMobile.style.display = "none";
            } if(explorePageMobile.style.display ==="grid"){
                explorePageMobile.style.display ="none"
            } if (mainLivePage.style.display ==="grid") {
                mainLivePage.style.display = "none";
            } if(messageTabPage.style.display ==="block"){
                messageTabPage.style.display ="none"
            } if(launchPage.style.display ==="block"){
                launchPage.style.display ="none"
            } if(mainProfilePage.style.display ==="grid"){
                mainProfilePage.style.display ="none"
            } if(messageTabPage.style.display ==="block"){
                messageTabPage.style.display ="none"
            } if(orderPage.style.display ==="grid"){
                orderPage.style.display ="none"
            }  else{
                settingsPage.style.display ="block"
                messageTabPage.style.display ="none"
                mainProfilePage.style.display ="none"
                launchPage.style.display ="none"
                messageTabPage.style.display ="none"
                mainLivePage.style.display = "none"
                explorePageMobile.style.display ="none"
                homePageMobile.style.display = "none";
                orderPage.style.display ="none"
                morePage.style.display ="none"
                currentLiveShowPage.style.display ="none"
                chatPageMobile.style.display ="none"
            }
        })
        orderButton.addEventListener("click", function(){
            if(orderPage.style.display ==="none"){
                orderPage.style.display ="grid"
                morePage.style.display ="none"
                currentLiveShowPage.style.display ="none"
            } if(settingsPage.style.display ==="block"){
                settingsPage.style.display ="none"
            } if( homePageMobile.style.display === "block"){
                homePageMobile.style.display = "none";
            } if(explorePageMobile.style.display ==="grid"){
                explorePageMobile.style.display ="none"
            } if (mainLivePage.style.display ==="grid") {
                mainLivePage.style.display = "none";
            } if(messageTabPage.style.display ==="block"){
                messageTabPage.style.display ="none"
            } if(launchPage.style.display ==="block"){
                launchPage.style.display ="none"
            } if(mainProfilePage.style.display ==="grid"){
                mainProfilePage.style.display ="none"
            } else{
                orderPage.style.display ="grid"
                settingsPage.style.display ="none"
                homePageMobile.style.display = "none";
                explorePageMobile.style.display ="none"
                mainLivePage.style.display = "none";
                messageTabPage.style.display ="none"
                launchPage.style.display ="none"
                mainProfilePage.style.display ="none"
                morePage.style.display ="none"
                currentLiveShowPage.style.display ="none"
                
            }
        })
        chatBackIcon.addEventListener("click", function(){
            if(chatPageMobile.style.display ==="block"){
                chatPageMobile.style.display ="none"
            } if(chatListPage.style.display ==="none"){
                chatListPage.style.display ="block"
            }else{
                chatPageMobile.style.display ="none" 
                chatListPage.style.display ="block"
            }
        })
        cancelUpload.addEventListener("click", function(){
            if(productUploadTab.style.display ==="flex"){
                productUploadTab.style.display ="none"
            } else{
                productUploadTab.style.display ="none"
            }
        }) 
        for(var i = 0; i < fillUpBox.length; i++){
            fillUpBox[i].addEventListener("click", function(){
                if(productUploadTab.style.display ==="none"){
                    productUploadTab.style.display ="flex"
                } else{
                    productUploadTab.style.display ="flex"
                }
            })
        }
        productBoxTab.addEventListener("click", function(){
            if(listProductLists.style.display ==="none"){
                listProductLists.style.display ="flex"
            } else{
                listProductLists.style.display ="none"
            }
        })
        for(var i = 0; i < productPurchase.length; i++){
            productPurchase[i].addEventListener("click", function(){
                if(continuePopUp.style.display ==="none"){
                    continuePopUp.style.display ="flex"
                } else{
                    continuePopUp.style.display ="flex"
                }
            })
        }
        continueDismiss.addEventListener("click", function(){
            if(continuePopUp.style.display ==="flex"){
                continuePopUp.style.display ="none"
            } else{
                continuePopUp.style.display ="none"
            }
        })
    }
    

}
tabletsContents();

function laptopContents(){
    const laptopInteractivity = window.matchMedia('(min-width: 992px) and (max-width: 6000px)').matches;
    if(laptopInteractivity){
       homePath.addEventListener("click", function(){
        if(homePage.style.display ==="none"){
            homePage.style.display ="block"
        } if(livePage.style.display ==="grid"){
            livePage.style.display ="none";
        } if(explorePage.style.display ==="grid"){
            explorePage.style.display ="none"
        } if(messagePage.style.display ==="grid"){
            messagePage.style.display ="none"
        } if(profilePage.style.display ==="grid"){
            profilePage.style.display ="none"
        } if(launchPage.style.display ==="block"){
            launchPage.style.display ="none"
        } else{
            homePage.style.display ="block";
            explorePage.style.display ="none";
            livePage.style.display ="none";
            messagePage.style.display ="none"
            profilePage.style.display ="none"
            launchPage.style.display ="none"
        } 
       })
       searchPath.addEventListener("click", function(){
        if(searchPage.style.display ==="none"){
            searchPage.style.display ="block"
        } else{
            searchPage.style.display ="none"
        }
       })
       explorePath.addEventListener("click", function(){
        if(homePage.style.display ==="block"){
            homePage.style.display ="none"
        }
        if(livePage.style.display ==="grid"){
            livePage.style.display ="none";
        }
        if(explorePage.style.display ==="none"){
            explorePage.style.display ="grid"
        } if(messagePage.style.display ==="grid"){
            messagePage.style.display ="none"
        } if(profilePage.style.display ==="grid"){
            profilePage.style.display ="none"
        } if(launchPage.style.display ==="block"){
            launchPage.style.display ="none"
        } else{
            explorePage.style.display ="grid"
            homePage.style.display ="none"
            livePage.style.display ="none"
            messagePage.style.display ="none"
            profilePage.style.display ="none"
            launchPage.style.display ="none"
        }
       })
       livePath.addEventListener("click", function(){
        if(homePage.style.display ==="block"){
            homePage.style.display ="none"
        }
        if(explorePage.style.display ==="grid"){
            explorePage.style.display ="none"
        }
        if(livePage.style.display ==="none"){
            livePage.style.display ="grid";
        } if(messagePage.style.display ==="grid"){
            messagePage.style.display ="none"
        } if(profilePage.style.display ==="grid"){
            profilePage.style.display ="none"
        } if(launchPage.style.display ==="block"){
            launchPage.style.display ="none"
        }else{
            livePage.style.display ="grid"
            homePage.style.display ="none"
            explorePage.style.display ="none"
            messagePage.style.display ="none"
            profilePage.style.display ="none"
            launchPage.style.display ="none"
        }
       })
       messagePath.addEventListener("click", function(){
        if(homePage.style.display ==="block"){
            homePage.style.display ="none"
        }
        if(explorePage.style.display ==="grid"){
            explorePage.style.display ="none"
        }
        if(livePage.style.display ==="grid"){
            livePage.style.display ="none";
        }
        if(messagePage.style.display ==="none"){
            messagePage.style.display ="grid"
        } if(profilePage.style.display ==="grid"){
            profilePage.style.display ="none"
        } if(launchPage.style.display ==="block"){
            launchPage.style.display ="none"
        } else{
            messagePage.style.display ="grid";
            livePage.style.display ="none";
            explorePage.style.display ="none"
            homePage.style.display ="none"
            profilePage.style.display ="none"
            launchPage.style.display ="none"
        }
       })
       notificationPath.addEventListener("click", function(){
        if(notificationPage.style.display ==="none"){
            notificationPage.style.display ="block"
        }
        else{
            notificationPage.style.display ="none"
        }
       })
       profilePath.addEventListener("click", function(){
        if(homePage.style.display ==="block"){
            homePage.style.display ="none"
        }
        if(explorePage.style.display ==="grid"){
            explorePage.style.display ="none"
        }
        if(livePage.style.display ==="grid"){
            livePage.style.display ="none";
        }
        if(messagePage.style.display ==="grid"){
            messagePage.style.display ="none"
        } if(profilePage.style.display ==="none"){
            profilePage.style.display ="grid"
        } if(launchPage.style.display ==="block"){
            launchPage.style.display ="none"
        }
         else{
            profilePage.style.display ="grid"
            messagePage.style.display ="none";
            livePage.style.display ="none";
            explorePage.style.display ="none"
            homePage.style.display ="none"
            launchPage.style.display ="none"
        }
       })
       launchPath.addEventListener("click", function(){
        if(homePage.style.display ==="block"){
            homePage.style.display ="none"
        }
        if(explorePage.style.display ==="grid"){
            explorePage.style.display ="none"
        }
        if(livePage.style.display ==="grid"){
            livePage.style.display ="none";
        }
        if(messagePage.style.display ==="grid"){
            messagePage.style.display ="none"
        } if(profilePage.style.display ==="grid"){
            profilePage.style.display ="none"
        } if(launchPage.style.display ==="none"){
            launchPage.style.display ="block"
        }  else{
            launchPage.style.display ="block"
            profilePage.style.display ="none"
            messagePage.style.display ="none";
            livePage.style.display ="none";
            explorePage.style.display ="none"
            homePage.style.display ="none"
        }
       })
       morePath.addEventListener("click", function(){
        if(morePage.style.display ==="none"){
            morePage.style.display ="block";
        }
        else{
            morePage.style.display ="none"; 
        }
       })
       

    }
}
laptopContents();*/