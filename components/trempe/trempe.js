$(document).ready(function() {
    $(".trempe-item").change(function(_e) {
        checkNewValue();
    });


    $(".stat-value input").change(function(_e) {
        getValueStat();
        checkNewValue();
    });


    $(".btn-validate").click(function(_e) {
        addValue();
    });
});



// DOM
    // Trempe 1
    var t1_stat_DOM       = $(".trempe-1 .trempe-stat");
    var t1_val_actual_DOM = $(".trempe-1 .trempe-val-actual");
    var t1_val_max_DOM    = $(".trempe-1 .trempe-val-max");
    var t1_val_new_DOM    = $(".trempe-1 .trempe-val-new");
    
    // Trempe 2
    var t2_stat_DOM       = $(".trempe-2 .trempe-stat");
    var t2_val_actual_DOM = $(".trempe-2 .trempe-val-actual");
    var t2_val_max_DOM    = $(".trempe-2 .trempe-val-max");
    var t2_val_new_DOM    = $(".trempe-2 .trempe-val-new");
    
    // Trempe 3
    var t3_stat_DOM       = $(".trempe-3 .trempe-stat");
    var t3_val_actual_DOM = $(".trempe-3 .trempe-val-actual");
    var t3_val_max_DOM    = $(".trempe-3 .trempe-val-max");
    var t3_val_new_DOM    = $(".trempe-3 .trempe-val-new");



var valueStat = {
    "Armor"   : 1,
    "ATK"     : 1,
    "Block"   : 1,
    "Crit"    : 1,
    "Evasion" : 1,
    "Hit"     : 1,
    "Tenacity": 1
}

// Function to get the value of the stat
function getValueStat() {
    valueStat["Armor"]    = $(".stat-value-Armor input").val();
    valueStat["ATK"]      = $(".stat-value-ATK input").val();
    valueStat["Block"]    = $(".stat-value-Block input").val();
    valueStat["Crit"]     = $(".stat-value-Crit input").val();
    valueStat["Evasion"]  = $(".stat-value-Evasion input").val();
    valueStat["Hit"]      = $(".stat-value-Hit input").val();
    valueStat["Tenacity"] = $(".stat-value-Tenacity input").val();
}


function checkNewValue() {
    // Get result
    var result_t1 = ( (100/parseInt(t1_val_max_DOM.val())) * parseInt(t1_val_new_DOM.val()) ) * valueStat[t1_stat_DOM.val()];
    if(!result_t1) result_t1 = 0;
    var result_t2 = ( (100/parseInt(t2_val_max_DOM.val())) * parseInt(t2_val_new_DOM.val()) ) * valueStat[t2_stat_DOM.val()];
    if(!result_t2) result_t2 = 0;
    var result_t3 = ( (100/parseInt(t3_val_max_DOM.val())) * parseInt(t3_val_new_DOM.val()) ) * valueStat[t3_stat_DOM.val()];
    if(!result_t3) result_t3 = 0;

    var result = result_t1 + result_t2 + result_t3;

    // Set text
    if (result > 0) {
        $(".result").html("Good");
    }
    else if (result < 0) {
        $(".result").html("Bad");
    }
    else {
        $(".result").html("Neutral");
    }
}


// Add value on input
function addValue() {
    // Trempe 1
    if (t1_val_new_DOM.val()) {
        var t1_actual_val = parseInt(t1_val_actual_DOM.val());
        if(!t1_actual_val) t1_actual_val = 0;

        t1_val_actual_DOM.val( parseInt(t1_val_new_DOM.val()) + t1_actual_val );
        t1_val_new_DOM.val("");
    }

    
    // Trempe 2
    if (t2_val_new_DOM.val()) {
        var t2_actual_val = parseInt(t2_val_actual_DOM.val());
        if(!t2_actual_val) t2_actual_val = 0;

        t2_val_actual_DOM.val( parseInt(t2_val_new_DOM.val()) + t2_actual_val );
        t2_val_new_DOM.val("");
    }

    
    // Trempe 3
    if (t3_val_new_DOM.val()) {
        var t3_actual_val = parseInt(t3_val_actual_DOM.val());
        if(!t3_actual_val) t3_actual_val = 0;

        t3_val_actual_DOM.val( parseInt(t3_val_new_DOM.val()) + t3_actual_val );
        t3_val_new_DOM.val("");
    }
}