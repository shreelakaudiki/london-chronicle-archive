const archive = {

    "1898": [
        {
            date: "12 March 1898",
            title: "New Reading Room Opens in Bloomsbury",
            link: "#"
        },
        {
            date: "28 September 1898",
            title: "Autumn Exhibition Draws London Crowds",
            link: "#"
        }
    ],

    "1903": [
        {
            date: "7 June 1903",
            title: "Steamship Routes Expanded Along the Thames",
            link: "#"
        }
    ],

    "1907": {
        lost: true,
        message: "Records from this year were lost during a storage relocation."
    },

    "1909": [
        {
            date: "4 February 1909",
            title: "Exhibition of Persian Ceramics Opens",
            link: "#"
        },
        {
            date: "19 October 1909",
            title: "Blackwood & Vale Announces Autumn Catalogue",
            link: "#"
        }
    ],

    "1911": [
        {
            date: "8 October 1911",
            title: "Kensington Antiquarian Society Announces Lecture",
            link: "#"
        },
        {
            date: "15 October 1911",
            title: "Jewellery Vanishes During Private Auction",
            link: "article-1911.html"
        },
        {
            date: "27 October 1911",
            title: "Autumn Auction Season Begins",
            link: "#"
        }
    ],

    "1914": {
        lost: true,
        message: "October–December issues are unavailable. Several original copies were damaged beyond recovery."
    },

    "1918": [
        {
            date: "3 May 1918",
            title: "Private Library Donates Historical Manuscripts",
            link: "#"
        }
    ],

    "1921": [
        {
            date: "14 August 1921",
            title: "Restoration Work Begins on Victorian Theatre",
            link: "#"
        }
    ],

    "1927": [
        {
            date: "2 April 1927",
            title: "Country Estates Change Hands Following Financial Difficulties",
            link: "#"
        }
    ],

    "1930": {
        lost: true,
        message: "Several issues from this year remain damaged and unavailable for digitisation."
    }

};


function searchArchive() {

    const year = document.getElementById("yearInput").value;
    const results = document.getElementById("results");

    results.innerHTML = "";

    if (!year) {
        results.innerHTML =
            "<p class='error'>Please enter a year.</p>";
        return;
    }

    const records = archive[year];

    if (!records) {
        results.innerHTML =
            "<p class='error'>No digitised records were found for this year.</p>";
        return;
    }

    if (records.lost) {

        results.innerHTML = `
            <div class="lost-record">
                <h3>Archive status: Incomplete</h3>
                <p>${records.message}</p>
            </div>
        `;

        return;
    }

    let html = `<h3>Search results: ${year}</h3>`;

    records.forEach(record => {

        html += `
            <div class="record">

                <p class="record-date">
                    ${record.date}
                </p>

            <h4
    ${
        record.link !== "#"
        ? `onclick="window.location.href='${record.link}'" class="clickable-record"`
        : ""
    }
>
    ${record.title}
</h4>

            </div>
        `;

    });

    results.innerHTML = html;
}
