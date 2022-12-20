let [el, count]  = [0, 0]
for(el; el < 3; el++ ) {
    for(count; count < el; count++){
        console.log('count', count)
    }
}