const footer = document.createElement('footer');

footer.innerHTML = `
<div class="footer">
    <div class="row">
        <div class="column">
            <div class="card card-footer">
                <h3>Office Address:</h3><br>
                <p>34,Anna Nagar</p>
                <p>LIC Building</p>
                <p>Chennai</p>
            </div>
        </div>

        <div class="column">
            <div class="card card-footer">
                <h3>Follow Us</h3><br>
                <span class="iconify icon" data-icon="fa-facebook" data-inline="false"></span>
                <span class="iconify icon" data-icon="websymbol-mail" data-inline="false"></span>
                <span class="iconify icon" data-icon="il-linkedin" data-inline="false"></span><br>
                <span class="iconify icon" data-icon="il-google-plus" data-inline="false"></span>
                <span class="iconify icon" data-icon="il-instagram" data-inline="false"></span>
                <span class="iconify icon" data-icon="mdi-twitter" data-inline="false"></span>
            </div>
        </div>

        <div class="column">
            <div class="card card-footer">
                <h3>Contact Us</h3><br>
                <p>+91 8954567890</p>
                <p>SHAKTH@skype</p>
                <p>enquiry@SHAKTH.com</p>
            </div>
        </div>
    </div>
    <div class="row" style="background-color: rgb(60, 60, 60); height: 50px; padding-top: 15px;">
            <p style="text-align: center;">Copyright &copy; | AKASH THANIKA SHURYA |</p>
    </div>
</div>
`;

document.body.appendChild(footer);