/* Switch Case :: SYNTAX =>         switch (key) {
                                        case value:
                                            
                                            break;

                                        default:
                                            break;
                                    }
*/

const month = 3;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;

    default:
        break;
}

// By default if we don't use break statement after each case then where the key match after that all cases will be executed except default 

