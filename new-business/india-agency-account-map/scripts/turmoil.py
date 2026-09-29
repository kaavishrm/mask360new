"""Agency turmoil 2025-26 sheet: structural changes that make clients poachable."""
from openpyxl.styles import Font, Alignment

GN = "https://news.google.com/rss/articles/"
ROWS = [
    ("Omnicom", "DDB Mudra (brand retired)",
     "Omnicom closed its IPG deal and retired the DDB, FCB and MullenLowe brands. India now runs as Omnicom Advertising India under Prasoon Joshi (chairman) and Aditya Kanthy (president).",
     "Dec 2025 to Jan 2026",
     "Clients were redistributed across McCann, BBDO Group and TBWA\\Lintas. Several legacy DDB accounts still show no confirmed new home.",
     ["Mudra (ex DDB Mudra, BBDO Group)"],
     "afaqs: Aditya Kanthy and Prasoon Joshi to steer Omnicom's India reboot",
     "https://www.afaqs.com/news/advertising/aditya-kanthy-and-prasoon-joshi-to-steer-omnicoms-india-reboot-10829934"),
    ("Omnicom", "BBDO Group India (BBDO, Ulka, Mudra)",
     "Mudra and Ulka (ex FCB Ulka) moved under BBDO Group India. Jitender Dabas became group CEO in Feb 2026.",
     "Dec 2025 to Feb 2026",
     "Repeated leadership change at BBDO, which holds Mercedes-Benz India and World Gold Council.",
     ["BBDO India", "Ulka (BBDO Group)"],
     "Storyboard18: Ulka, Mudra find new home in BBDO after Omnicom IPG merger",
     "https://www.storyboard18.com/agency-news/exclusive-ulka-mudra-find-new-home-in-bbdo-after-omnicom-ipg-merger-shake-up-85462.htm"),
    ("Omnicom", "TBWA\\Lintas (ex MullenLowe Lintas and TBWA India)",
     "MullenLowe Lintas and TBWA India merged into TBWA\\Lintas from 1 Jan 2026. Co-CEO Prateek Bharadwaj was reported to be exiting in Feb 2026.",
     "Jan to Feb 2026",
     "Decades-old Lintas accounts (Tanishq, Axis Bank) now sit in a newly merged agency with changing leadership.",
     ["TBWA\\Lintas", "TBWA\\Lintas (ex Lintas Live)"],
     "Storyboard18 (via Google News): Prateek Bharadwaj to exit TBWA\\Lintas?",
     GN + "CBMitAFBVV95cUxQTFZWem1QWU9Wa19OYmFrSzBDdHloSjRWMzVnNmpMcTE0dFN2R2wtWFBXWjVrS2FHcmY2Q2lmT3oyeGxFY1RadEVMdTloa242Mks3NkJxRG14bHQtUU1fYVdkQTFsRnAxR3Q1QmRxUmpVblFUR3VJUlJOWE8ybWEyZnAzTzlWb3VNVlE1VWF6TjFZa2YxZWFHVWNscHlIR05Wc3gwNmgwQ0hZUFNoRWt3Z3J3RG7SAboBQVVfeXFMUHg4bTd1YVdRX2xXaDl2Vm4ySHlISDVOZ0dGYi1Kb1RLZm9DLUlfQzJCcnoteEU0TXN0OGY4djFuOWVBeFFxM3ZNdXM4cjJfanQzSnYwZ1dOQW1UUFdMRzN6dDg0MjFUaGdnUXV3OU1ZZzZwQndobjFRRUZIZDRORzhfWHdyS2J6TmpKUUZkbzJBVVRDY3pJVVdhcFFCUXNxWGdHTHBkZ2lQRmN1S2E3YmRJZXJjYVE4VlVn"),
    ("Omnicom", "McCann India (absorbed FCB India)",
     "FCB India was folded into McCann India under CEO Dheeraj Sinha, with ex DDB CCO Rahul Mathew running creative.",
     "Dec 2025 to 2026",
     "Competing clients now share one roof (for example KFC and Burger King inside Omnicom). Former FCB accounts show no 2026 work.",
     ["McCann India", "McCann India (ex FCB India)", "FCB Neo (absorbed into McCann)"],
     "afaqs: CEO Dheeraj Sinha on leading McCann in the post-merger era",
     "https://www.afaqs.com/news/advertising/ceo-dheeraj-sinha-on-leading-mccann-in-the-post-merger-era-12015227"),
    ("WPP", "WPP Creative India (Ogilvy, VML, AKQA, Grey, Landor, Burson, Design Bridge)",
     "WPP put its India creative agencies under one unit, WPP Creative India, with Hephzibah Pathak as CEO.",
     "Apr 2026",
     "Integration year: teams, leaders and account structures are shifting across all WPP creative clients.",
     [],
     "afaqs (via Google News): Ogilvy chair Hephzibah Pathak appointed CEO of WPP Creative India",
     GN + "CBMisgFBVV95cUxNdFRlQ29SdldEdUpBRmVjM3VlMkxFRTZFSTBYMkxTODNmbUdPazhRdGRRMy1kcjNCZGdOYXpJU0ExZUpNbzlaWlluZ1lhcmtZTEZyWVBKSW5zYkhoRjV1RjMyb2x5T2ViVGliQ0c0anFDUW1GQkk1UHhSNmRaWW9kbmh3SHYtM2g1WHBCdlZvNmFZTHdjaFJNdTNLdHBqZUhsNXNlRWVwVmJqVmFTSUhJc0Z3"),
    ("WPP", "Grey 82.5 (Ogilvy group)",
     "Grey India and 82.5 Communications were merged into Grey 82.5 under Ogilvy. Grey's CCO left in Jul 2026.",
     "Jun to Jul 2026",
     "Former Grey and 82.5 clients are mid-transition.",
     ["Grey 82.5 (Ogilvy)"],
     "afaqs: Ogilvy Group integrates Grey and 82.5 Communications to form Grey 82.5",
     "https://www.afaqs.com/news/advertising/ogilvy-group-integrates-grey-and-825-communications-to-form-grey-825-12008871"),
    ("WPP", "VML India (incl. Contract, Mirum, The Glitch)",
     "Group CCO Kalpesh Patankar left VML India in Aug 2026 and joined Publicis in Sep 2026. The CSO also left earlier in 2026.",
     "Aug to Sep 2026",
     "Creative leadership gap on auto and tech accounts.",
     ["VML India", "Contract Advertising (VML)", "Mirum India (VML)", "The Glitch (VML)"],
     "bestmediainfo (via Google News): Kalpesh Patankar exits VML India",
     GN + "CBMivgFBVV95cUxQWl9OazB2b2lmazU1RkxYVFNadkRoS2M3SjBSVlB3aXFneEFpbU9pNDhDdU5QSzNhZHRON1JHN1dwVURjdjlEOGRhYnJBaFFzeGpxaTY3VC1NR3V1TGdYVEd0cWV6UGh0c1ZjRlpiZWFTQUo3djlDRGxkdGdObmhzS2d5Um9oaVhWS25rV2x2MVZfenpjWkxiUDloYlE0dV9LcGpRVUJDY09Fdk1rbzctNGg2WFlhTlhiVXBpNGZR0gG-AUFVX3lxTFBaX05rMHZvaWZrNTVGTFhUU1p2RGhLYzdKMFJWUHdpcWd4QWltT2k0OEN1TlBLM2FkdE43Ukc3V3BVRGN2OUQ4ZGFickFoUXN4anFpNjdULU1HdXVMZ1hUR3RxZXpQaHRzVmNGWmJlYVNBSjd2OUNEbGR0Z05uaHNLZ3lSb2hpWFZLbmtXbHYxVl96emNaTGJQOWhiUTR1X0twalFVQkNjT0V2TWtvNy00aDZYWWFOWGJVcGk0ZlE?oc=5"),
    ("WPP", "Burson India",
     "WPP hired Goldman Sachs to explore a sale of Burson.",
     "Apr 2026",
     "PR clients face a possible change of owner.",
     ["Burson India"],
     "bestmediainfo (via Google News): WPP explores Burson sale",
     GN + "CBMixwFBVV95cUxOWTV1WDItNmtxZVNISF9iQWVwVHJHcWdmc0NLQ2ZEX24tVEIydEM1d3J0NENueGNKZ0sxZW5Ya2oySHhOa0k0WlhJeGRwQ1I3TlNwcmRMSkJjVVY3SmdnaHZfa21SRkFhNFQ1TDJ1ZV83ZGRPUFNVeE52R01ISjBsYm4tSTVyb19rYUd2MTNZeUxTSm8tR18ySlZua3BveE03UHpGcEoxQnF2blhUbVNobXZDNFhaMXFOb0Y2YnNBZi1MYjgxMDdB"),
    ("WPP", "Ogilvy India",
     "Piyush Pandey, the face of Ogilvy India, died in Oct 2025.",
     "Oct 2025",
     "Long-tenure accounts enter a new era. Luxury sub-brands (Emporio, Indriya, Raga) are run inside mass-market teams.",
     ["Ogilvy India"],
     "afaqs: Industry in mourning over Piyush Pandey's demise",
     "https://www.afaqs.com/news/advertising/industry-in-mourning-over-piyush-pandeys-demise-10588916"),
    ("Publicis", "BBH India (absorbed Publicis India)",
     "Publicis Groupe folded Publicis India into BBH India.",
     "Jan 2026",
     "Former Publicis India clients changed teams after the MD who fronted them left in 2025.",
     ["BBH India (ex Publicis India)", "BBH India"],
     "Storyboard18 (via Google News): Publicis folds Publicis India into BBH",
     GN + "CBMiywFBVV95cUxOQ2Z1U0hPV3JrMkp3Y2t1RXBmbDRpMXhaZkxvZGhIYTZ3dHE1MS13ajNkMGtuMUFzX0NsbGxOTE5QbUtwYUxnSXp4MEp0MTVCTm9USDE3cXBKLXM0dFU3dEs3MkVOSG5xUTVIdHBDeDJEYzJic2dqYXRDY3ZNWXFVbE1VVXZDN0lQTE1QUzBGR1MzRHBaV3hOMDZ4ak9fWWg1Z3RGREdrTnViQzZWbDJpTVYzOVFUeDRiM2t5Qnl0ODk4R040NW5WQVJxc9IB0AFBVV95cUxQb1hFQ2NrWTcyR2ZYd18xZDhjR2NiY0ZaVG5XcmQ0OTlFWDBlZzNCVWVfR21EV05ubjRMVFJhelIxQVZmaWpjUzY4eThNSnI0b181S0VPRWxnaGRFdzdGUXl6cVZZZnplWjBNczJkeHZQMG5HZnhVREVvLTRhUnU5LW5oUHAwM0xzb3NCeDRFa0ZBcFVmVExlVGUzRDIwNk9Wb05ITFk1cFVtY0ZnVXFmR1VlVEhrY1dZUTc3MFN0RzA0QVhZdWxCMXd6ejNuY3dJ?oc=5"),
    ("Publicis", "Publicis Digital Experience (Digitas, Razorfish, Indigo Consulting)",
     "Digitas, Razorfish and Indigo Consulting were combined into PDX under CEO Amaresh Godbole.",
     "Jan 2026",
     "Digital and social clients were re-teamed.",
     ["Publicis Digital Experience (ex Digitas)"],
     "Storyboard18 (via Google News): Publicis brings PDX to India",
     GN + "CBMi3gFBVV95cUxNejZrTUQ4R0VuUXZDdmh4OXB2dm1JMG9YQU1RMjVfU281VmRtTEZDY0J3bmhBWGQtV2toNktsNEY5WmdqWTEwOVFQWnBqaU1VbGxMc0R6WmxGR1dlcDZib2w3TXRHSUxUWmNyNE9xT0VPVGlBemxEdDV1WUxueVUteDMwOGZHUVpCQTREdVVFTDNiTzI5WUlKVUd6OU01S0dBcHgxWEdpUldqTnhzX240cmNIWE15UU9HZDV1dURLYWw4NExjZS1UR05FTG5PUzVsM2tsbVV4ZGpibWYzd3fSAeMBQVVfeXFMUDVPVjJ4Skg3ekQ2Rm50Vm9rbktqdmtvODhZSE5oM1FBVVNsaWc4cU56eVY1ZUtpc3N1ODF5bUpLYzhWRnZ3YUpLZzgtZmJqbUNvaGE4cUpjbFZ5Y2JTN0RKZGRkeGRHWlBrUUpnWDhBS0ZIU2dtRjZLMDV6cEF5STJ0amt4ZGRrbGtpenBYVlNvUVNJMFNqZEVia1ZKc01XRXdnR3lJT3pnRDZRSWZXbDFXb0o0d25OQzJPdkxoal9uS1RsU0hzc0IxWk5ZLURxU1ZiUWIzdTlrRjVPS29VeHpKY0E"),
    ("Dentsu", "Dentsu India (all creative units)",
     "Income tax searches ran across Dentsu India offices in Mumbai, Delhi, Pune and Bengaluru. Dentsu also posted a large 2025 loss and cut jobs globally.",
     "Sep 2026",
     "Operational and reputational distraction. Clients may hedge with a second agency.",
     ["Dentsu Creative India", "Dentsu Creative Isobar", "Dentsu Creative PR (ex Perfect Relations)"],
     "Moneycontrol (via Google News): Dentsu India offices searched simultaneously",
     GN + "CBMizAFBVV95cUxPSVVQVl9XdzREdlRkblVtWGNZRnNsOU9qWF9yNUJvbGFncTM0eGszbWsyOHg5TEdDdzNmMjZBWnFqZjF1V1NXREFzemNCQWtwc3RBWmZJazlZS0NvWV9Dc0RnOWdWZC1iU2JhcWVJRGVNUVFieEhOX25Rc0dXRE1CdXRvWER0eFFUdUtQNDdOTjlmQ2gzbFpsbE9IcUpMWjJTUmlZR0FuRFdmWldGMUFQX1lxR2xqemZ3SFcxMGJMT2VnN1RWMmZTVHB1U2XSAdIBQVVfeXFMTV9vVVIxSUhaRDhTaW1aX0VmVUZmdXJhNkFfU3NrNFBycHNnZW1DdVhOTjJPWTJsVFNGbzg1UmEwOUw1aGd1YXlrOUdKQlNGSXVDM0ZYZV9Cd1RuOTVnMWtVRzREeHh5Z0pWcHJLby1JMnR3WGZYZ0RxZ0UxN3E5Z3BsUmhMMVhCUkdzaDJYMkVyUTVONm11SGhnZlRVbnl4VUM3d0FMa1lTZ041M1BjUDNNNmVZVU5vUk9IaEIyeVFRZzhoYXZMT3JKMlVyYlZhTVF3?oc=5"),
    ("Dentsu", "Dentsu Creative Webchutney",
     "Surjo Dutt was made CEO of Webchutney.",
     "May 2026",
     "Leadership change on digital accounts, on top of the Dentsu tax search.",
     ["Dentsu Creative Webchutney"],
     "ET BrandEquity (via Google News): Webchutney makes Surjo Dutt the CEO",
     GN + "CBMizgFBVV95cUxNcTZfcGNZMXYwclBudXdjUFBLTkw4c0U2X2JMQ0kwOTRuM1BzZkRmb3R2M0JSWlFLQmtuZGNzTFRRU0tVX0JLTEwwR1VaNmJZYW40MWFoZjRKUEhZanpCV2hiemVTcWx5eTVmU3I3SHBsYlFKRFBfazlOVm9lV0RVY0JvUERUeEp5XzZGUmtrSzQxSFZsQ1dBbkhjRHNCODZ4d0pQN0FwVWluSi0wVlNVZTV2Zi1SdElZaDlXUHBDdFRnUDd4UXVyUDhLYkpCQdIB0wFBVV95cUxOY0xhVXo1X2prbXc1cDdOWlpvcGZUMm1wTTdOaEdJRkNrMVRQcHV4SGdvWVNpMHJfOUQwUjkzTTdpd1hoNmQwYmVPbXVJRnYxbk5mSGN3RTZzWkptWFhoeThRS2tQcjBMVjZNU3lNY01RWkNuMi1CUk1xdUUxMTRoWGtWS0ViYjFwc01aTFBjeEhaWTBtQWl5SDRDUUdHOVZDSl9GeTJRN0dxMEptUFZRZWtYUDg5b1Rmbm9BcmpkdENfOE92anlIQl80NzFsRzhLZnVZ?oc=5"),
    ("Havas", "Shortcut Shobiz India (new)",
     "Havas launched a luxury and lifestyle experiential agency with Paris-based Shortcut, led by Farah Lauren Khan.",
     "Sep 2026",
     "New direct competitor for luxury experiential and launch-event briefs.",
     [],
     "The Economic Times (via Google News): Havas India launches luxury experiential agency Shortcut Shobiz India",
     GN + "CBMi_AFBVV95cUxPUWJHN1hfOWNwWHJGRkI2Z19tWkE4SWJDWmRkVVJVWEhRQ1lmZUQ3LVZuVDR5VDd0RXZUeVhKY2phV1BDdmRPWVd2RzRlVmlWNTRwVE9uZkgwdUd3SEw2RGpDWkJINUVESUVmVzVKcGhDYXc0VXF4RkhSMHdoSHFfYzlsZzdoaXJ4Y19fS2tBLVdpR3ZaLU9FQnFha0lTV3htVkZ5VUFKU1BQOFlHQXpMbTR5YllSTURKbmdVNXVNcnUycE80aEV1RzFLeGdSUUFXUTB4TVRwSEZhTW95Z2ZSTzNxcHotOU1zQUpYN0VOQldqZEs5NFcwMXRMY23SAYICQVVfeXFMT2NzU1JfWEZGLTkwcGlhNUpqUGlJZkd6Z1UzNm1JcV9Eb1NLVnRZdFJGR0V2LXlMcmJSWEhEa2lfeDl0eElzWjhoeDdTUlNFSk5qWWp6Qjgya2ZZTlZNSjA4RGxRZUdOWWlrZ2RrdnFEeHNNSGZkcGdscGRvWVVMY0NkOHZfeUltNWc5ZWRXdXBxS1E1UGlkMlpQNHgzVFh1cU1Ya2pQelAtdi1MdXhlZk9DZ0sxZjF2Wk1LbERkellDbllidkcwd0hqazJxYXpZb1VFM1dEekVQYS1VZ09hRVlZc1JnYzZ5NWR3OW5nSmxuMGxYb1M2cEhPcHVJZ2xDQ0VB?oc=5"),
    ("Independent", "Madison World (Madison Loop, Madison Media, HiveMinds)",
     "Madison's sale process is unresolved and Wondrlab reportedly exited the race. Madison BMB was merged into Madison Loop.",
     "Feb to Aug 2026",
     "Ownership uncertainty for Madison clients.",
     ["Madison Loop (ex Madison BMB)", "Madison Media", "HiveMinds (Madison)"],
     "Storyboard18 (via Google News): Wondrlab exits Madison acquisition race?",
     GN + "CBMi2gFBVV95cUxQNm5tZ3preE5sY3dfODhoalN1QWJFOG9DY3k1cGJxVkk5VUp1N0RzUHZ1ZC1jVmF1VlJYcThWQkZqaDlfS3FvM0ZnQXdjaGpnVkxESmdWNXBqRmR6aHFqVjYzaHFaTTNPZi1BdmpDOEdxdGRLcEZmTU9YRGtEbXBKcDZhMS15RDZiUkJhWXFYUVhLNDBzNXl2TWc5Z1JsWDB4WGN6QV9wWGJKN1BIMUtKQ0lwNFNiejRhdUJUWGQxOFhUN003Q3RDUVp0M0I2empBVkQ1bGpRSTVhQdIB3wFBVV95cUxQVU53NEc3Tm1WS0h1UWdaNGozRlBodGFCTzNIWDMzVFkzN1FzZGV2YS00VjQ3QzFPbUZrSV9xM0diMkpFTjNBYlFEWk9yQUpqWFJjUnROM04zSkJRNDFHOHg0UXRKNExoNl9BaEZZRHBNN3JTbW4yVFN3b1kzV2dydDVSdFBNV0JrOS02bi1uNFh6Sm13eE9pbWNYNXhrNW1WdlkzdVZNbmpYUE1qZjBXc3ZqTFhzSlZjSDFodmU4UHAxaElOSzc2akZlNC13ajNKbUc2ZzRzWjV6WEd6UktN"),
    ("Independent", "The Womb",
     "Reported to be in advanced talks to be acquired by Accenture Song.",
     "Jul 2026",
     "An ownership change gives its clients a natural moment to review.",
     ["The Womb"],
     "IndianWeb2: Accenture in advanced talks to acquire The Womb",
     "https://www.indianweb2.com/2026/07/accenture-in-advanced-talks-to-acquire.html"),
    ("Independent", "Gozoop (now YAAP)",
     "YAAP completed its majority acquisition of Gozoop. YAAP founder Atul Hegde died in Jul 2026.",
     "Mar to Jul 2026",
     "Integration plus the loss of the acquirer's founder.",
     ["Gozoop (now YAAP)"],
     "Storyboard18 (via Google News): Yaap Digital acquires majority stake in Gozoop",
     GN + "CBMivgFBVV95cUxOYi1kVHUtWkE2cEV1VjRnR0tQQWQ5bUwtNWtCd0tlX0dwZWJtRk5CMGttdlNWMHh1N3ZCajZ1VGZwSnVsbnBEaVA4eEszbFhpNmpGbEEySEhGVThTdmFkckZzcEZXOFhpNmY0RDF4d2RnRlZTbjUzbGcwWl93LXR5NTByanVDb0ZXOUtLR2V3ZHhxQ2hETEU4dllNSjBlT2dNV1dORU8yN2pQc2V1R3ZpZGg4QlRiMnl0ZlpoQmpn0gHDAUFVX3lxTE11WUtodVlHRW9tV1d0eXZZVXMwNlR3dVNPRE1XMlRHbzNmUGxGWE1TdU14S2pFUFBFeXJjMHJZMmxRVEQwRDJqODNEMmFlek1Gem8zOGhIVHBMVUFBQUItX1hGalRteWVNd2pLX1k1a1otaUZqZGF5TlMxX1lvaF91UTh5YWxWOXV5YjJNT0M5QWlyX2h2LXlEVWNlV1BlNW9IR2ZsbmIxUGtULWVaeWIzb0VYN3JGZlFOUDB3NjNUQXNkMA?oc=5"),
    ("Cheil", "Social Beat (now Cheil)",
     "Cheil SWA Group acquired Social Beat.",
     "Nov 2025",
     "Integration into a Samsung-owned group, with senior exits reported.",
     ["Social Beat (Cheil)"],
     "Social Samosa (via Google News): Cheil SWA Group acquires Social Beat",
     GN + "CBMilAFBVV95cUxQY2xGUmtaQzhWMDBwb0RlRC1ONDR5eklmSUUtV3FDQWhTckVrZnYtU3Fsd2tiM2RTaF9GRmxJcGVOaUhWeVlnTExCbURiMEVnaDVXVFNXZkE3QUFKQUhaZ0x0SzZkb2FCa2xmcnB2bE1ub2dmRWhNSTVZeE52dS1xS0FpMU9WNGxybjUyanU0NUZnMFRi"),
    ("Independent", "Hashtag Orange",
     "Managing partner Gaurang Menon, who built the Mumbai business, stepped down.",
     "Sep 2026",
     "Mumbai accounts lose the person who won and ran them.",
     ["Hashtag Orange"],
     "MediaNews4U: Gaurang Menon steps down from Hashtag Orange",
     "https://www.medianews4u.com/gaurang-menon-steps-down-from-hashtag-orange-after-building-mumbai-business/"),
    ("Independent", "Schbang",
     "Co-founder Akshay Gurnani exited and Harshil and Sohil Karia took full control.",
     "Mar 2025",
     "Leadership reshuffle at the largest independent social agency.",
     ["Schbang"],
     "afaqs: Schbang announces leadership transition",
     "https://www.afaqs.com/news/digital/schbang-announces-leadership-transition-as-harshil-and-sohil-karia-acquire-akshay-gurnanis-stake-8772334"),
    ("Independent", "Blink Digital",
     "Meta disabled four of Blink's Business Manager accounts. Blink sued Meta in the Bombay High Court (hearing 12 Oct 2026).",
     "Sep 2026",
     "Clients' paid social is exposed while the dispute runs.",
     ["Blink Digital"],
     "Storyboard18 (via Google News): Blink Digital seeks Rs 1,158 crore from Meta",
     GN + "CBMiuwFBVV95cUxQM1JHZXo1bngzN2JkeXlQc1psOTdSSFBsRGFaT2dNOGlYcllDV3lQaWx3TW0za1YzSjc3dWlUa19uXzlpQUJqMTRrMUQ0T05kelFpNV9sbmVhZnBSbUtobktKbTJPdkt1UFRydG1nN0djc0pDRVdKME1oVDBUUUsyN293OVA1TTFhY1k4YnkzczNXWG1jZnMxS1F5TFRJQUdTbFJIemNjSjVPRExHSEVIMURKZDgtcGFHc1Uw0gHAAUFVX3lxTE9PbTBpRGFyVlJ1Rkx1RmhsRE1nYkpEQ1hzd3BXdGdYNlh1OEdQVVlwRUtHUy1YNFAtUFpfYnFYTkhJbFFwUng5WWgtYnZ3X3VUeVExNnJyZVVmRGZNOEk1VXB2M0Z0d1BIVk1USWRpSmdZYW5xaWFLVTROS1NfR0VUdUF0WVl5akpSeFNrRFI3OHpsYnl0WGlTa01ZVnVBVFFqd0J5MkhoWjNjZ3ZLQndTc2NqMkNLQXloa1NnZ29ndA?oc=5"),
    ("Independent", "Big Bang Social (Collective Artists Network)",
     "Layoffs at the creator platform, which its owner is also looking to sell.",
     "Feb to Apr 2026",
     "Influencer and creator mandates at risk.",
     [],
     "Storyboard18 (via Google News): Layoffs at Collective Artists Network hit Big Bang Social",
     GN + "CBMiuwFBVV95cUxQT2J5NFMzNGhkSFJNWFJobFZuYUVReUVKQUQzMHZQeWhPVzlFVDlVeEpxdzJvRUdJY1drV0pJUGVCNGJsNENYaGRsZHlyT0pPdE9tWkxJM2xHNmJMY2FFdnJTbHhMYUN3TDRreEdnczQ1SnhOY3g4VE1ma2hiQ0E1MElKYVR3a28wSk9PSUZMTWN0ejRLR3dmaUVQeDhBUURTVkZzcDhFeUZrRVhZUmRPZmNtaTNsWE01dnfSAb8BQVVfeXFMTnI3a0xXNEoxdXdaeG5GLTZmQ25QTkZCTGFHTWdDTTYtRkNRSVg3U2hNSFdNY1ZRbWpHalV0QXBRYnJmMHZHdWpkMnVrTUllaWtXUDVOeFZJT1FUVHpKQWxWMUlndnA5akJPVkRjWS1hTmt1SmJZeE1ZdDR1azJBeGRlZkYwZTFXS1BQcE5QOVN0SDIyRllIZENacnZwcUdBRVNUMzhzX1k0RWh1clJkQk83S1MzWE9TcHJlanBqV2s?oc=5"),
]

TIER_RANK = {"Luxury": 3, "Premium": 2, "Mass": 1}

def add_sheet(wb, recs, header, put, BOLD, WRAP):
    ws = wb.create_sheet("Agency turmoil 2025-26")
    cols = [("Group", 12), ("Agency", 32), ("What changed", 60), ("When", 16), ("Why it opens doors", 48),
            ("Accounts exposed (from this map, luxury and premium first)", 70), ("Source", 60)]
    header(ws, cols)
    link_font = Font(name="Arial", size=10, color="0563C1", underline="single")
    for i, (grp, ag, what, when, why, canon, label, url) in enumerate(ROWS, 2):
        held = {}
        for r in recs:
            if r["agency"] in canon and r["status"] != "Recently lost":
                b = r["brand_display"]
                held[b] = max(held.get(b, 0), TIER_RANK.get(r["brand_tier"], 0))
        names = sorted(held, key=lambda b: (-held[b], b.lower()))
        exposed = ", ".join(b + (" (L)" if held[b] == 3 else "") for b in names[:14])
        if len(names) > 14:
            exposed += f", plus {len(names) - 14} more"
        if not canon:
            exposed = "All WPP creative clients (see rows below)" if grp == "WPP" else "None mapped"
        vals = [grp, ag, what, when, why, exposed]
        for j, v in enumerate(vals, 1):
            if j == 2:
                put(ws, i, j, v, font=BOLD, align=WRAP)
            else:
                put(ws, i, j, v, align=WRAP)
        c = ws.cell(row=i, column=7, value=label)
        c.hyperlink = url
        c.font = link_font
        c.alignment = Alignment(wrap_text=True, vertical="top")
    ws.auto_filter.ref = f"A1:G{len(ROWS) + 1}"
    return ws
