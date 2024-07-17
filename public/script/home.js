var list = [
    {'id' : 0 ,   'name' : 'Formula 1' ,             'vp' : 21.75 ,    'mrp' : 2378 ,    'd25' : 1857 ,    'd35' : 1649 ,    'd42' : 1503 ,    'd50' : 1337 ,   'qty' : 0},
    {'id' : 1 ,   'name' : 'PPP - 200g' ,            'vp' : 11.50 ,    'mrp' : 1413 ,    'd25' : 1103 ,    'd35' : 980 ,     'd42' : 893 ,     'd50' : 794 ,    'qty' : 0},
    {'id' : 2 ,   'name' : 'PPP - 400g' ,            'vp' : 22.50 ,    'mrp' : 2711 ,    'd25' : 2118 ,    'd35' : 1880 ,    'd42' : 1714 ,    'd50' : 1525 ,   'qty' : 0},
    {'id' : 3 ,   'name' : 'ShakeMate' ,             'vp' : 6.45 ,     'mrp' : 712 ,     'd25' : 624 ,     'd35' : 589 ,     'd42' : 564 ,     'd50' : 536 ,    'qty' : 0},
    {'id' : 4 ,   'name' : 'Ocular Defence' ,        'vp' : 19.25 ,    'mrp' : 2103 ,    'd25' : 1643 ,    'd35' : 1458 ,    'd42' : 1330 ,    'd50' : 1182 ,   'qty' : 0},
    {'id' : 5 ,   'name' : 'Male Factor' ,           'vp' : 34.75 ,    'mrp' : 3720 ,    'd25' : 2906 ,    'd35' : 2580 ,    'd42' : 2352 ,    'd50' : 2092 ,   'qty' : 0},
    {'id' : 6 ,   'name' : "Woman's Choice" ,        'vp' : 12.45 ,    'mrp' : 1357 ,    'd25' : 1060 ,    'd35' : 941 ,     'd42' : 858 ,     'd50' : 763 ,    'qty' : 0},
    {'id' : 7 ,   'name' : 'Brain Health' ,          'vp' : 15.10 ,    'mrp' : 1597 ,    'd25' : 1247 ,    'd35' : 1108 ,    'd42' : 1010 ,    'd50' : 898 ,    'qty' : 0},
    {'id' : 8 ,   'name' : 'Skin Booster' ,          'vp' : 38.65 ,    'mrp' : 4266 ,    'd25' : 3478 ,    'd35' : 3163 ,    'd42' : 2943 ,    'd50' : 2691 ,   'qty' : 0},
    {'id' : 9 ,   'name' : 'Immune Health' ,         'vp' : 15.80 ,    'mrp' : 1668 ,    'd25' : 1302 ,    'd35' : 1156 ,    'd42' : 1054 ,    'd50' : 938 ,    'qty' : 0},
    {'id' : 10 ,  'name' : 'Afresh' ,                'vp' : 7.80 ,     'mrp' : 885 ,     'd25' : 691 ,     'd35' : 614 ,     'd42' : 559 ,     'd50' : 497 ,    'qty' : 0},
    {'id' : 11 ,  'name' : 'Afresh Tulsi' ,          'vp' : 7.80 ,     'mrp' : 885 ,     'd25' : 704 ,     'd35' : 632 ,     'd42' : 582 ,     'd50' : 524 ,    'qty' : 0},
    {'id' : 12 ,  'name' : '24 Hydrate' ,            'vp' : 14.05 ,    'mrp' : 1786 ,    'd25' : 1461 ,    'd35' : 1331 ,    'd42' : 1240 ,    'd50' : 1136 ,   'qty' : 0},
    {'id' : 13 ,  'name' : '24 Rebuild' ,            'vp' : 24.70 ,    'mrp' : 2854 ,    'd25' : 2270 ,    'd35' : 2037 ,    'd42' : 1874 ,    'd50' : 1687 ,   'qty' : 0},
    {'id' : 14 ,  'name' : 'DinoShake' ,             'vp' : 9.60 ,     'mrp' : 1216 ,    'd25' : 949 ,     'd35' : 843 ,     'd42' : 768 ,     'd50' : 683 ,    'qty' : 0},
    {'id' : 15 ,  'name' : 'Activated Fiber' ,       'vp' : 15.75 ,    'mrp' : 1786 ,    'd25' : 1395 ,    'd35' : 1239 ,    'd42' : 1129 ,    'd50' : 1004 ,   'qty' : 0},
    {'id' : 16 ,  'name' : 'Active Fiber Complex' ,  'vp' : 22.95 ,    'mrp' : 2792 ,    'd25' : 2181 ,    'd35' : 1937 ,    'd42' : 1765 ,    'd50' : 1570 ,   'qty' : 0},
    {'id' : 17 ,  'name' : 'Aloe Plus' ,             'vp' : 9.40 ,     'mrp' : 1156 ,    'd25' : 902 ,     'd35' : 801 ,     'd42' : 730 ,     'd50' : 650 ,    'qty' : 0},
    {'id' : 18 ,  'name' : 'Aloe Concentrate' ,      'vp' : 24.95 ,    'mrp' : 2941 ,    'd25' : 2297 ,    'd35' : 2040 ,    'd42' : 1860 ,    'd50' : 1654 ,   'qty' : 0},
    {'id' : 19 ,  'name' : 'Simply Probiotic' ,      'vp' : 21.95 ,    'mrp' : 2410 ,    'd25' : 1882 ,    'd35' : 1672 ,    'd42' : 1524 ,    'd50' : 1355 ,   'qty' : 0},
    {'id' : 20 ,  'name' : 'Triphala' ,              'vp' : 11.25 ,    'mrp' : 1189 ,    'd25' : 928 ,     'd35' : 824 ,     'd42' : 751 ,     'd50' : 668 ,    'qty' : 0},
    {'id' : 21 ,  'name' : 'Calcium' ,               'vp' : 10.25 ,    'mrp' : 1313 ,    'd25' : 1025 ,    'd35' : 910 ,     'd42' : 830 ,     'd50' : 738 ,    'qty' : 0},
    {'id' : 22 ,  'name' : 'Joint Support' ,         'vp' : 20.90 ,    'mrp' : 2679 ,    'd25' : 2092 ,    'd35' : 1858 ,    'd42' : 1694 ,    'd50' : 1506 ,   'qty' : 0},
    {'id' : 23 ,  'name' : 'Niteworks' ,             'vp' : 75 ,       'mrp' : 7777 ,    'd25' : 6075 ,    'd35' : 5394 ,    'd42' : 4918 ,    'd50' : 4374 ,   'qty' : 0},
    {'id' : 24 ,  'name' : 'Lifeline' ,              'vp' : 25.75 ,    'mrp' : 2910 ,    'd25' : 2273 ,    'd35' : 2019 ,    'd42' : 1840 ,    'd50' : 1637 ,   'qty' : 0},
    {'id' : 25 ,  'name' : 'Beta Heart' ,            'vp' : 19.55 ,    'mrp' : 2447 ,    'd25' : 1995 ,    'd35' : 1814 ,    'd42' : 1688 ,    'd50' : 1543 ,   'qty' : 0},
    {'id' : 26 ,  'name' : 'Multivitain' ,           'vp' : 19.95 ,    'mrp' : 2186 ,    'd25' : 1707 ,    'd35' : 1516 ,    'd42' : 1382 ,    'd50' : 1229 ,   'qty' : 0},
    {'id' : 27 ,  'name' : 'Cell Activator' ,        'vp' : 21.95 ,    'mrp' : 2417 ,    'd25' : 1888 ,    'd35' : 1677 ,    'd42' : 1529 ,    'd50' : 1359 ,   'qty' : 0},
    {'id' : 28 ,  'name' : 'Cell-U-Loss' ,           'vp' : 15.75 ,    'mrp' : 1860 ,    'd25' : 1453 ,    'd35' : 1290 ,    'd42' : 1176 ,    'd50' : 1046 ,   'qty' : 0},
    {'id' : 29 ,  'name' : 'Herbal Control' ,        'vp' : 32.95 ,    'mrp' : 3746 ,    'd25' : 2926 ,    'd35' : 2598 ,    'd42' : 2369 ,    'd50' : 2106 ,   'qty' : 0},
    {'id' : 30 ,  'name' : 'Cleanser' ,              'vp' : 10.40 ,    'mrp' : 1165 ,    'd25' : 910 ,     'd35' : 808 ,     'd42' : 736 ,     'd50' : 655 ,    'qty' : 0},
    {'id' : 31 ,  'name' : 'Toner' ,                 'vp' : 11.80 ,    'mrp' : 1322 ,    'd25' : 1033 ,    'd35' : 917 ,     'd42' : 836 ,     'd50' : 743 ,    'qty' : 0},
    {'id' : 32 ,  'name' : 'Serum' ,                 'vp' : 27.05 ,    'mrp' : 3022 ,    'd25' : 2361 ,    'd35' : 2096 ,    'd42' : 1911 ,    'd50' : 1700 ,   'qty' : 0},
    {'id' : 33 ,  'name' : 'Moisturizer' ,           'vp' : 13.15 ,    'mrp' : 1473 ,    'd25' : 1151 ,    'd35' : 1022 ,    'd42' : 931 ,     'd50' : 828 ,    'qty' : 0},
]

// default page by choosing discount MRP
readList(list, 'mrp');


// choose discount type function and update to screen
function readList(data, choose) {
    var resetAndGenerateDiv = document.getElementById('resetAndGenerateDiv');
    resetAndGenerateDiv.innerHTML = `
        <button class="reset" onclick="window.location.reload()">Reset</button>
        <button class="generateReceipt" onclick="check(${choose})">Generate Receipt</button>
    `;

    var checkBtn = document.getElementById('inputDiv');
    checkBtn.innerHTML = `
        <textarea name="" class="remarkInput" id="remarkInput" placeholder="Remark: Enter name or anything to remember in future (optional)"></textarea>
    `;
    
    // to update total price everytime when user change the discount type
    updatePriceOnly(choose);

    // run this when user choose for MRP
    if (choose === 'mrp') {
        
        // discount button animation
        var discount = document.getElementById('mrp');
        discount.classList.add('activeBtn');

        document.querySelector('.d25').classList.remove("activeBtn");
        document.querySelector('.d35').classList.remove("activeBtn");
        document.querySelector('.d42').classList.remove("activeBtn");
        document.querySelector('.d50').classList.remove("activeBtn");

        // (header of the list or table)
        // it clear the old list except header of the list and print the new selected list only
        var table = document.getElementById('table');
        table.innerHTML = `
            <div class="child gap">
                <div class="product">Products</div>
                <div class="vp">VP</div>
                <div class="price">Price</div>

                <div class="quantity">
                    <button>-</button><div>qty.</div><button>+</button>
                </div>
            </div>
        `;
        
        // read and print the product list
        for (var i = 0; i < data.length; i++) {
            var row = `
                <div class="child">
                    <div class="product">${data[i].name}</div>
                    <div class="vp">${data[i].vp}</div>
                    <div class="price">₹${data[i].mrp}</div>

                    <div class="quantity">
                        <button onclick="removeItemFromCart(list[${data[i].id}], 'mrp');">-</button>
                        <div>${data[i].qty}</div>
                        <button onclick="addItemToCart(list[${data[i].id}], 'mrp');">+</button>
                    </div>
                </div>
            `
            table.innerHTML += row
        }
        
    }

    // run this when user choose for 25% discount
    else if (choose === 'd25') {

        // discount button animation
        var discount = document.getElementById('d25');
        discount.classList.add('activeBtn');
        
        document.querySelector('.mrp').classList.remove("activeBtn");
        document.querySelector('.d35').classList.remove("activeBtn");
        document.querySelector('.d42').classList.remove("activeBtn");
        document.querySelector('.d50').classList.remove("activeBtn");

        // (header of the list or table)
        // it clear the old list except header of the list and print the new selected list only
        var table = document.getElementById('table');
        table.innerHTML = `
            <div class="child gap">
                <div class="product">Products</div>
                <div class="vp">VP</div>
                <div class="price">Price</div>

                <div class="quantity">
                    <button>-</button><div>qty.</div><button>+</button>
                </div>
            </div>
        `;

        // read and print the product list
        for (var i = 0; i < data.length; i++) {
            var row = `<div class="child">
                            <div class="product">${data[i].name}</div>
                            <div class="vp">${data[i].vp}</div>
                            <div class="price">₹${data[i].d25}</div>

                            <div class="quantity">
                                <button onclick="removeItemFromCart(list[${data[i].id}], 'd25');">-</button>
                                <div>${data[i].qty}</div>
                                <button onclick="addItemToCart(list[${data[i].id}], 'd25');">+</button>
                            </div>
                        </div>`
            table.innerHTML += row
        }
    }

    // run this when user choose for 35% discount
    else if (choose === 'd35') {

        // discount button animation
        var discount = document.getElementById('d35');
        discount.classList.add('activeBtn');
        
        document.querySelector('.mrp').classList.remove("activeBtn");
        document.querySelector('.d25').classList.remove("activeBtn");
        document.querySelector('.d42').classList.remove("activeBtn");
        document.querySelector('.d50').classList.remove("activeBtn");

        // (header of the list or table)
        // it clear the old list except header of the list and print the new selected list only
        var table = document.getElementById('table');
        table.innerHTML = `
            <div class="child gap">
                <div class="product">Products</div>
                <div class="vp">VP</div>
                <div class="price">Price</div>

                <div class="quantity">
                    <button>-</button><div>qty.</div><button>+</button>
                </div>
            </div>
        `;

        // read and print the product list
        for (var i = 0; i < data.length; i++) {
            var row = `<div class="child">
                            <div class="product">${data[i].name}</div>
                            <div class="vp">${data[i].vp}</div>
                            <div class="price">₹${data[i].d35}</div>

                            <div class="quantity">
                                <button onclick="removeItemFromCart(list[${data[i].id}], 'd35');">-</button>
                                <div>${data[i].qty}</div>
                                <button onclick="addItemToCart(list[${data[i].id}], 'd35');">+</button>
                            </div>
                        </div>`
            table.innerHTML += row
        }
    }

    // run this when user choose for 42% discount
    else if (choose === 'd42') {

        // discount button animation
        var discount = document.getElementById('d42');
        discount.classList.add('activeBtn');
        
        document.querySelector('.mrp').classList.remove("activeBtn");
        document.querySelector('.d25').classList.remove("activeBtn");
        document.querySelector('.d35').classList.remove("activeBtn");
        document.querySelector('.d50').classList.remove("activeBtn");

        // (header of the list or table)
        // it clear the old list except header of the list and print the new selected list only
        var table = document.getElementById('table');
        table.innerHTML = `
            <div class="child gap">
                <div class="product">Products</div>
                <div class="vp">VP</div>
                <div class="price">Price</div>

                <div class="quantity">
                    <button>-</button><div>qty.</div><button>+</button>
                </div>
            </div>
        `;

        // read and print the product list
        for (var i = 0; i < data.length; i++) {
            var row = `<div class="child">
                            <div class="product">${data[i].name}</div>
                            <div class="vp">${data[i].vp}</div>
                            <div class="price">₹${data[i].d42}</div>

                            <div class="quantity">
                                <button onclick="removeItemFromCart(list[${data[i].id}], 'd42');">-</button>
                                <div>${data[i].qty}</div>
                                <button onclick="addItemToCart(list[${data[i].id}], 'd42');">+</button>
                            </div>
                        </div>`
            table.innerHTML += row
        }
    }

    // run this when user choose for 50% discount
    else if (choose === 'd50') {

        // discount button animation
        var discount = document.getElementById('d50');
        discount.classList.add('activeBtn');
        
        document.querySelector('.mrp').classList.remove("activeBtn");
        document.querySelector('.d25').classList.remove("activeBtn");
        document.querySelector('.d35').classList.remove("activeBtn");
        document.querySelector('.d42').classList.remove("activeBtn");

        // (header of the list or table)
        // it clear the old list except header of the list and print the new selected list only
        var table = document.getElementById('table');
        table.innerHTML = `
            <div class="child gap">
                <div class="product">Products</div>
                <div class="vp">VP</div>
                <div class="price">Price</div>

                <div class="quantity">
                    <button>-</button><div>qty.</div><button>+</button>
                </div>
            </div>
        `;

        // read and print the product list
        for (var i = 0; i < data.length; i++) {
            var row = `<div class="child">
                            <div class="product">${data[i].name}</div>
                            <div class="vp">${data[i].vp}</div>
                            <div class="price">₹${data[i].d50}</div>

                            <div class="quantity">
                                <button onclick="removeItemFromCart(list[${data[i].id}], 'd50');">-</button>
                                <div>${data[i].qty}</div>
                                <button onclick="addItemToCart(list[${data[i].id}], 'd50');">+</button>
                            </div>
                        </div>`
            table.innerHTML += row
        }
    }
}


// Assigning totals to zero
var totalQuantity = 0;
var totalVp = 0;
var totalPrice = 0;

// Increment each quantity and update totals of vp and quantity (total price has separet function)
function addItemToCart(productId, discount) {
    
    // Loop to find where to increase the qantity
    for (let i = 0; i < list.length; i++) {

        // Increase the qantity only the selected product
        if (list[i].name === productId.name) {

            // Increment of quantity
            list[i].qty++;

            // re-print the list without changing the selected discount type
            readList(list, discount);

            // re-assigning old totals to zero to avoid the change when doing addition of old totals and new totals
            // because evertime user increment the quantity adds the old and new totals
            totalQuantity = 0;
            totalVp = 0;

            // it can get the sum of quantities and total vp
            list.forEach(item => {
                totalQuantity += item.qty;
                totalVp += ((item.vp * 100) * item.qty) / 100;
            });

            // take 2 digits only after decimal point for vp
            totalVp = Math.round(totalVp * 100) / 100;
            
            // calculate current total price with selected discount type 
            updatePriceOnly(discount);
            
            // print the totals
            var totals = document.getElementById('totals');
            totals.innerHTML = `
                <div>${totalVp} vp</div>
                <div id="priceDiv">₹${totalPrice}</div>
                <div>${totalQuantity}</div>
            `;
        }
    }
}

// Decrement each quantity and update totals of vp and quantity (total price has separet function)
function removeItemFromCart(product, discount) {
    
    // Loop to find where to decrease the qantity
    for (let i = 0; i < list.length; i++) {

        // Decrease the qantity only the selected product
        if (list[i].name === product.name && list[i].qty >= 1) {

            // Decrement of quantity
            list[i].qty--;

            // re-print the list without changing the selected discount type
            readList(list, discount);

            // re-assigning old totals to zero to avoid the change when doing addition of old totals and new totals
            // because evertime user increment the quantity adds the old and new totals
            totalQuantity = 0;
            totalVp = 0;

            // it can get the sum of quantities and total vp
            list.forEach(item => {
                totalQuantity += item.qty;
                totalVp += ((item.vp * 100) * item.qty) / 100;
            });

            // take 2 digits only after decimal point for vp
            totalVp = Math.round(totalVp * 100) / 100;

            // calculate current total price with selected discount type 
            updatePriceOnly(discount);
            
            // print the totals
            var totals = document.getElementById('totals');
            totals.innerHTML = `
                <div>${totalVp} vp</div>
                <div id="priceDiv">₹${totalPrice}</div>
                <div>${totalQuantity}</div>
            `;
        }
    }
}


// Assigning total price to zero
var totalPrice = 0;

// Calculation of total price with selected discount type
function updatePriceOnly(discount) {

    // get elements of total price's screen
    var priceDiv = document.getElementById('priceDiv');

    // calculate the total price according to selected discount type
    if (discount === 'mrp') {
        // clear the old total price
        totalPrice = 0;
        // calculate the current total price
        list.forEach(item => {
            totalPrice += item.mrp * item.qty
        });
        // print the total price
        priceDiv.innerHTML = `₹${totalPrice}`;
    }

    else if (discount === 'd25') {
        totalPrice = 0;
        list.forEach(item => {
            totalPrice += item.d25 * item.qty
        });
        priceDiv.innerHTML = `₹${totalPrice}`;
    }

    else if (discount === 'd35') {
        totalPrice = 0;
        list.forEach(item => {
            totalPrice += item.d35 * item.qty
        });
        priceDiv.innerHTML = `₹${totalPrice}`;
    }

    else if (discount === 'd42') {
        totalPrice = 0;
        list.forEach(item => {
            totalPrice += item.d42 * item.qty
        });
        priceDiv.innerHTML = `₹${totalPrice}`;
    }

    else if (discount === 'd50') {
        totalPrice = 0;
        list.forEach(item => {
            totalPrice += item.d50 * item.qty
        });
        priceDiv.innerHTML = `₹${totalPrice}`;
    }
}







function check(choose) {
    discountType = choose.innerHTML;
    var remarkInput = document.getElementById('remarkInput').value;
    
    var body = document.getElementById('body');
    body.innerHTML = `
        <div class="bodyDiv">
            <div class="top"></div>

            <div class="homeBtnContainer">
                <button class="home" onclick="home(discountType);">Home</button>
            </div>

            <div class="invoiceDiv">
                <h2>INVOICE</h2>
            </div>

            <div class="remarkDiv">
                <p class="remark">Remark:</p>
                <p class="remarkLine" id="remarkPrint"></p>
            </div>
            
            <div class="dateDiv">
                <p class="date" id="current-date">${today()}<b> : Date (time)</b></p>
                <p class="date">${discountType}<b> : Discount</b></p>
            </div>

            <div class="parentReceipt" id="receipt">
                
            </div>

            <div class="bottom"></div>
        </div>
    `;
    var remarkPrint = document.getElementById('remarkPrint');
    if (remarkInput == '') {
        remarkPrint.innerHTML = "You don't write any remark for this invoice.";
    } else {
        remarkPrint.innerHTML = remarkInput;
    }
    
    var receipt = document.getElementById('receipt');
    receipt.innerHTML = `
        <div class="headerReceipt">
            <b class="headerProducts">Products</b>
            <b class="headerBtext">Unit Price</b>
            <b class="headerBtext">Qty.</b>
            <b class="headerBtext">Line Total</b>
        </div>
    `;
    

    
    
    if (discountType == 'MRP') {
        for (let i = 0; i < list.length; i++) {
        
            if (list[i].qty > 0) {
                // receipt.push({ name: list[i].name, qty : list[i].qty});
                
                var receiptRow = `
                    <div class="itemsReceipt">
                        <b class="headerProducts">${list[i].name}</b>
                        <b class="headerBtext unitPrice">₹${list[i].mrp}</b>
                        <b class="headerBtext lineQty">${list[i].qty}</b>
                        <b class="headerBtext lineTotal">₹${list[i].mrp * list[i].qty}</b>
                    </div>
                `
                receipt.innerHTML += receiptRow;
            }
        }
    }
    else if (discountType == '25%') {
        for (let i = 0; i < list.length; i++) {
        
            if (list[i].qty > 0) {
                // receipt.push({ name: list[i].name, qty : list[i].qty});
                
                var receiptRow = `
                    <div class="itemsReceipt">
                        <b class="headerProducts">${list[i].name}</b>
                        <b class="headerBtext unitPrice">₹${list[i].d25}</b>
                        <b class="headerBtext lineQty">${list[i].qty}</b>
                        <b class="headerBtext lineTotal">₹${list[i].d25 * list[i].qty}</b>
                    </div>
                `
                receipt.innerHTML += receiptRow;
            }
        }
    }
    else if (discountType == '35%') {
        for (let i = 0; i < list.length; i++) {
        
            if (list[i].qty > 0) {
                // receipt.push({ name: list[i].name, qty : list[i].qty});
                
                var receiptRow = `
                    <div class="itemsReceipt">
                        <b class="headerProducts">${list[i].name}</b>
                        <b class="headerBtext unitPrice">₹${list[i].d35}</b>
                        <b class="headerBtext lineQty">${list[i].qty}</b>
                        <b class="headerBtext lineTotal">₹${list[i].d35 * list[i].qty}</b>
                    </div>
                `
                receipt.innerHTML += receiptRow;
            }
        }
    }
    else if (discountType == '42%') {
        for (let i = 0; i < list.length; i++) {
        
            if (list[i].qty > 0) {
                // receipt.push({ name: list[i].name, qty : list[i].qty});
                
                var receiptRow = `
                    <div class="itemsReceipt">
                        <b class="headerProducts">${list[i].name}</b>
                        <b class="headerBtext unitPrice">₹${list[i].d42}</b>
                        <b class="headerBtext lineQty">${list[i].qty}</b>
                        <b class="headerBtext lineTotal">₹${list[i].d42 * list[i].qty}</b>
                    </div>
                `
                receipt.innerHTML += receiptRow;
            }
        }
    }
    else if (discountType == '50%') {
        for (let i = 0; i < list.length; i++) {
        
            if (list[i].qty > 0) {
                // receipt.push({ name: list[i].name, qty : list[i].qty});
                
                var receiptRow = `
                    <div class="itemsReceipt">
                        <b class="headerProducts">${list[i].name}</b>
                        <b class="headerBtext unitPrice">₹${list[i].d50}</b>
                        <b class="headerBtext lineQty">${list[i].qty}</b>
                        <b class="headerBtext lineTotal">₹${list[i].d50 * list[i].qty}</b>
                    </div>
                `
                receipt.innerHTML += receiptRow;
            }
        }
    }
    

    if (totalQuantity == 0) {
        receipt.innerHTML += `
            <p style="text-align: center; color: gray; font-size: 13px">
                Your cart is empty. Please add some items.
            </p>
        `;
    }

    receipt.innerHTML += `
        <div class="totalReceipt">
            <b class="totalsVpReceipt">Total vp: ${totalVp} Vp</b>
            <b class="totalsQtyReceipt">Total qty.: ${totalQuantity}</b>
            <b class="totalsAmountReceipt">₹${totalPrice}/-</b>
        </div>
    `;
    
}

function today() {
    var currentDate = new Date();
    var dd = currentDate.getDate();
    var mm = currentDate.getMonth() + 1;
    var yyyy = currentDate.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm == 1) {
        mm = 'Jan';
    } else if (mm == 2) {
        mm = 'Feb';
    } else if (mm == 3) {
        mm = 'Mar';
    } else if (mm == 4) {
        mm = 'Apr';
    } else if (mm == 5) {
        mm = 'May';
    } else if (mm == 6) {
        mm = 'Jun';
    } else if (mm == 7) {
        mm = 'Jul';
    } else if (mm == 8) {
        mm = 'Aug';
    } else if (mm == 9) {
        mm = 'Sep';
    } else if (mm == 10) {
        mm = 'Oct';
    } else if (mm == 11) {
        mm = 'Nov';
    } else if (mm == 12) {
        mm = 'Dec';
    }

    var formatted = dd + '-' + mm + '-' + yyyy + ' (' + currentDate.toLocaleTimeString() + ')';
    return formatted;
} 




function home(choose) {

    var body = document.getElementById('body');
    body.innerHTML = `
        <center>
            <div class="header">
                <div class="discount">
                    <p>Discount</p>
                    <button class="mrp" onclick="readList(list, 'mrp');" id="mrp">MRP</button>
                    <button class="d25" onclick="readList(list, 'd25');" id="d25">25%</button>
                    <button class="d35" onclick="readList(list, 'd35');" id="d35">35%</button>
                    <button class="d42" onclick="readList(list, 'd42');" id="d42">42%</button>
                    <button class="d50" onclick="readList(list, 'd50');" id="d50">50%</button>
                </div>

                <div class="result" id="totals">
                    <div>0 vp</div>
                    <div id="priceDiv">₹0</div>
                    <div>0</div>
                </div>
                <div class="resetAndGenerateDiv" id="resetAndGenerateDiv">
                    
                </div>
            </div>

            <div id="inputDiv">
            
            </div>
            
            <div class="parent" id="table">
                <div class="child gap">
                    <div class="product">Products</div>
                    <div class="vp">VP</div>
                    <div class="price">Price</div>

                    <div class="quantity">
                        <button>-</button><div>qty.</div><button>+</button>
                    </div>
                </div>
            </div> 
        </center>
    `
    
    if (choose == 'MRP') {
        readList(list, 'mrp');
    }
    else if (choose == '25%') {
        readList(list, 'd25');
    }
    else if (choose == '35%') {
        readList(list, 'd35');
    }
    else if (choose == '42%') {
        readList(list, 'd42');
    }
    else if (choose == '50%') {
        readList(list, 'd50');
    }
    
    var totals = document.getElementById('totals');
    totals.innerHTML = `
        <div>${totalVp} vp</div>
        <div id="priceDiv">₹${totalPrice}</div>
        <div>${totalQuantity}</div>
    `;
}