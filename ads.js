let removeAds = document.getElementById("removeAds");

removeAds.addEventListener('click', function(e) {
    removeAdsClickFunction(e);
});

function removeAdsClickFunction(event) {
    event.preventDefault();
    var elem = document.getElementById("tc7e");
    if (null !== elem) {
        elem.style.display  = 'none';
        alert('This should do the work !');

        return;
    }
    
    alert('Unable to find selector !');
}