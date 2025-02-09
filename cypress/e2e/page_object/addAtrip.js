const tripeelmets = {

    departureCity: '.container .proposer-trajet_FromBox__SYPoq input.pac-target-input', // Placeholder exact

    clickDepartureCity: '.pac-item',

    ArrivalCity: '.proposer-trajet_FromBox__SYPoq > div:nth-child(2) input.pac-target-input', // Placeholder exact

    clickArrivalCity: '.pac-item',

    DepartureDate : 'input[type="date"]',

    AmDepartureDate: 'label[for="option1"]',

    ArrivalDtae :'input[type="date"]',

    PmArrivalDtae: 'label[for="option4"]',

    avion: 'label[for="avion"]',

    PNR: 'input[name="pnr"]',

    Flight_number: 'input[name="vol_number"]',

    max_Length: 'input[name="max_length"]',

    max_width: 'input[name="max_width"]',

    max_height: '[name="max_height"]',

    Between_5KG_and_30KG: 'label[for="5KG à 30KG"]',

    Pick_up_hand_to_hand: 'input[type="radio"][name="mam1"][value="oui"]',

    Pick_up_in_relay_point: '#r4',

    Drop_off_hand_to_hand: '#r5',

    Drop_off_in_relay_point: '#r8',

    Add_Trip: 'button[type="submit"]',
};
export default tripeelmets;