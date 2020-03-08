// @ts-nocheck
$( document ).ready( function () {
    $( 'select' ).formSelect();

    let fiosValue, wirelessValue, customer, message;

    $( '#fios' ).on( 'change', ( e ) => {
        fiosValue = e.target.value;
    } )

    $( '#wireless' ).on( 'change', ( e ) => {
        wirelessValue = e.target.value;
    } )
    $( '#customer' ).on( 'change', ( e ) => {
        customer = e.target.value;
    } )


    $( 'form' ).on( 'change', ( e ) => {

        if ( customer === 'new' && fiosValue && wirelessValue ) {
            generateNew()
        } else {
            removeNew()
        }
        if ( customer === 'existing' && fiosValue && wirelessValue ) {
            generateExisting()
        } else if ( customer !== 'existing' ) {
            removeExisting()
        }

        if ( fiosValue || wirelessValue || customer ) {


            if ( fiosValue === 'any' && wirelessValue === 'regular' && ( customer === 'none' || customer === 'existing' ) ) {

                generateMessage( `
                <ul class="list collection">
                <li class="collection-item">customer qualifies for $10 in Device Dollars per month</li>
                </ul>` )
            } else if ( fiosValue === 'any' && wirelessValue === 'unlimited' && ( customer === 'none' || customer === 'existing' ) ) {

                generateMessage( `
                <ul class="list collection">
                <li class="collection-item">customer qualifies for $10 in Device Dollars per month</li>
                </ul>` )
            } else if ( fiosValue === 'gigabit' && wirelessValue === 'regular' && ( customer === 'none' || customer === 'existing' ) ) {

                generateMessage( `
                <ul class="list collection">
                <li class="collection-item">customer qualifies for $10 in Device Dollars per month</li>
                <li class="collection-item">$10 monthly off total monthly charges ($5/mo off Fios and $5/mo off Wireless</li>
                </ul>
                ` )
            } else if ( fiosValue === 'any' && wirelessValue === 'unlimited' && ( customer === 'none' || customer === 'existing' ) ) {

                generateMessage( `
                <ul class="list collection">
                <li class="collection-item">customer qualifies for $10 in Device Dollars per month</li>
                <li class="collection-item">$10 monthly off total monthly charges ($5/mo off Fios and $5/mo off Wireless)</li>
                </ul>
                ` )
            } else if ( fiosValue === 'gigabit' && wirelessValue === 'unlimited' && ( customer === 'none' || customer === 'existing' ) ) {

                generateMessage( `
                <ul class="list collection">
                <li class="collection-item">customer qualifies for $10 in Device Dollars per month</li>
                <li class="collection-item">$20 monthly off total monthly charges ($10/mo off Fios and $10/mo off Wireless)</li>
                </ul>
                ` )
            } else if ( fiosValue === 'any' && wirelessValue === 'regular' && customer === 'new' ) {

                generateMessage( `
                <ul class="list collection">
                <li class="collection-item">customer qualifies for $10 in Device Dollars per month</li>
                <li class="collection-item">$10 monthly off total monthly charges ($5/mo off Fios and $5/mo off Wireless</li>
                </ul>
                ` )
            } else if ( fiosValue === 'any' && wirelessValue === 'unlimited' && customer === 'new' ) {

                generateMessage( `
                <ul class="list collection">
                <li class="collection-item">customer qualifies for $10 in Device Dollars per month</li>
                <li class="collection-item">$20 monthly off total monthly charges ($10/mo off Fios and $10/mo off Wireless</li>
                </ul>
                ` );

            } else if ( fiosValue === 'gigabit' && wirelessValue === 'regular' && customer === 'new' ) {

                generateMessage( `
                <ul class="list collection">
                <li class="collection-item">customer qualifies for $10 in Device Dollars per month</li>
                <li class="collection-item">$20 monthly off total monthly charges ($10/mo off Fios and $10/mo off Wireless</li>
                </ul>
                ` );

            } else if ( fiosValue === 'any' && wirelessValue === 'regular' && customer === 'new' ) {

                generateMessage( `
                <ul class="list collection">
                <li class="collection-item">customer qualifies for $10 in Device Dollars per month</li>
                <li class="collection-item">$10 monthly off total monthly charges ($5/mo off Fios and $5/mo off Wireless</li>
                </ul>
                ` );

            } else if ( fiosValue === 'gigabit' && wirelessValue === 'unlimited' && customer === 'new' ) {

                generateMessage( `
                <ul class="list collection">
                <li class="collection-item">customer qualifies for $10 in Device Dollars per month</li>
                <li class="collection-item">$30 monthly off total monthly charges ($15/mo off Fios and $15/mo off Wireless</li>
                </ul>
                ` );

            }





        } else {
            $( '.list' ).text( '' )
        }
    } )



    function generateMessage( msg ) {

        $( '.outcome' ).html( `
        ${msg}
        ` )
    }

    function generateNew() {
        $( '.card-footer' ).html( `
        <h6 class="center">Welcome Offer</h6>
        <p class="center p z-depth-4 animated fadeIn">
        Customer must sign up for both plans within 30 days of each other.</p>` )
    }

    function removeNew() {
        $( '.card-footer' ).html( '' );
    }

    function generateExisting() {
        $( '.card-footer1' ).html( `
        <h6 class="center">Enroll In Verizon Up.</h6>
        <p class="center p z-depth-4 animated fadeIn">
        Customer must enroll in Verizon Up using the My Verizon App. Mobile + Home Rewards enrrollment is also required and is completed through Verizon Up.</p>` )
    }

    function removeExisting() {
        $( '.card-footer1' ).html( '' );
    }




} );

function reset() {
    window.location.reload()
}