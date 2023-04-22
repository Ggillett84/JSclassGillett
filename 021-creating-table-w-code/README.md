# week 10 creating table with code

It looks cleaner not using the arrow functions and going with just a function. Is this always an option, or is there a time when one (cost, or function) is the only man for the job?

# where in code do we start to render the table:

I would think that you should start at the top of the page right after the function to UPDATEDOM. 

also the folder 020 did not come with the comments telling what the code is doing.... bummer
(nevermind, I have never looked at someone elses code on gethub before so I did not knwo what I was doing.... I think I have it figured out now.)

# how would we render the input data

<!-- const  = [miles,gallons,price,'#output-avg','#output-avg','Edit/Delete']
    const tr = document.createElement('tr')
    headings.forEach (function(row){
        let tr = document.createElement('tr')
        tr.textContent = row
        tr.appendChild(tr)
    })
    console.log (tr)
    tbl.appendChild (tr)
    TBL_OUTPUT.appendChild(tbl) -->

    I think it will look something like this.....????  --\ 00 /--