document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {
        chrome.tabs.getSelected(null, function(tab) {
            d = document;
            var f = d.createElement('form');
            var Year = [
            	'2016/',
            	'2015/',
            	'2014/',
            	'2013/',
            	'2012/',
            	'2011/',
            	'2010/',
            	'2009/',
            	'2008/',
            	'2007/',
            	'2006/'
            ];

            var Month = [
              	'01',
                '02',
                '03',
                '04',
                '05',
                '06',
                '07',
                '08',
                '09',
                '10',
                '11',
                '12'
            ];

            var index = Math.floor(Math.random() * Year.length);
            var index2 = Math.floor(Math.random() * Month.length);
            f.action = 'https://www.scotthyoung.com/blog/' + Year[index] + Month[index2];
            f.method = 'post';
            var i = d.createElement('input');
            i.type = 'hidden';
            i.name = 'url';
            i.value = tab.url;
            f.appendChild(i);
            d.body.appendChild(f);
            f.submit();
        });
    }, false);
}, false);
