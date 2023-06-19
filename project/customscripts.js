
window.onload = function() {
    const myCarouselElement = document.querySelector('#Testimonials')
    const carousel = new bootstrap.Carousel(myCarouselElement, {
        interval: false,

    })

    console.log(myCarouselElement)
    console.log(carousel)


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

    document.getElementById("calculateButton").addEventListener("click", calculateTotalCost);

    function calculateTotalCost() {
        var service = document.getElementById("service").value;
        var graphicsHours = parseInt(document.getElementById("graphicsHours").value);
        var programmingHours = parseInt(document.getElementById("programmingHours").value);
        var consultationHours = parseInt(document.getElementById("consultationHours").value);

        var hourlyRateGraphics = 15;
        var hourlyRateProgramming = 20;
        var hourlyRateConsultation = 5;

        var hourlyRateMultiplier = 1;
        if (service === "ecommerce") {
            hourlyRateMultiplier = 1.5;
        } else if (service === "learning") {
            hourlyRateMultiplier = 2;
        }

        var totalCost = (graphicsHours * hourlyRateGraphics +
            programmingHours * hourlyRateProgramming +
            consultationHours * hourlyRateConsultation) * hourlyRateMultiplier;

        var totalCostDisplay = document.getElementById("totalCost");
        totalCostDisplay.textContent =  totalCost.toFixed(2);
    }
}