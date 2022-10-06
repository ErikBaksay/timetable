import { ScheduledEvent } from './interfaces/scheduled-event';

export var eventsData : ScheduledEvent[] = [
    {
        name: 'Matematika I_2122',
        shortName: 'M1',
        online: false,
        room: 'N9-201(ZP1)',
        linkToRoom: 'https://www.google.com/maps/search/?api=1&query=48.731822,21.244548',
        professor: ['Jana Fortes'],
        professorEmail: ['jana.fortes@tuke.sk'],
        day: 0,
        start: [9,10],
        end: [10,40]
    },
    {
        name: 'Základy algoritmizácie a programovania',
        shortName: 'ZAP',
        online: false,
        room: 'L9-B529',
        linkToRoom: 'https://www.google.com/maps/search/?api=1&query=48.7304,21.24545',
        professor: ['Lukáš Tomčišák'],
        professorEmail: ['lukas.tomcisak@student.tuke.sk'],
        day: 0,
        start: [10,50],
        end: [12,20]
    },
    {
        name: 'Základy inžinierstva materiálov',
        shortName: 'ZIM',
        online: false,
        room: 'L9-B/P004 (P25)',
        linkToRoom: 'https://www.google.com/maps/search/?api=1&query=48.7304,21.24545',
        professor: ['Tomáš Lenger'],
        professorEmail: ['tomas.lenger@tuke.sk'],
        day: 0,
        start: [13,30],
        end: [15,0]
    },
    {
        name: 'Repetitórium z matematiky',
        shortName: 'RzM',
        online: true,
        room: 'zasadačka online',
        linkToRoom: null,
        professor: ['Michal Staš'],
        professorEmail: ['<michal.stas@tuke.sk'],
        day: 1,
        start: [13,30],
        end: [15,0]
    },
    {
        name: 'Úvod do inžinierstva',
        shortName: 'UDI',
        online: true,
        room: 'zasadačka online',
        linkToRoom: null,
        professor: [],
        professorEmail: [],
        day: 1,
        start: [15,10],
        end: [16,40]
    },
    {
        name: 'Matematika I_2122',
        shortName: 'M1',
        online: true,
        room: 'zasadačka online',
        linkToRoom: null,
        professor: ['Blanka Baculíková'],
        professorEmail: ['blanka.baculikova@tuke.sk'],
        day: 2,
        start: [7,30],
        end: [9,0]
    },
    {
        name: 'Základy algoritmizácie a programovania',
        shortName: 'ZAP',
        online: true,
        room: 'zasadačka online',
        linkToRoom: null,
        professor: ['Emília Pietriková'],
        professorEmail: ['emilia.pietrikova@tuke.sk'],
        day: 2,
        start: [9,10],
        end: [11,35]
    },
    {
        name: 'Základy elektrotechnického inžinierstva',
        shortName: 'ZEI',
        online: true,
        room: 'zasadačka online',
        linkToRoom: null,
        professor: [
            'Roman Cimbala',
            'Anna Hodulíková',
            'Ján Kaňuch',
            'Darina Špaldonová'
        ],
        professorEmail: [
            'roman.cimbala@tuke.sk',
            'anna.hodulikova@tuke.sk',
            'jan.kanuch@tuke.sk',
            'darina.spaldonova@tuke.sk'
        ],
        day: 2,
        start: [12,30],
        end: [14,0]
    },
    {
        name: 'Základy inžinierstva materiálov',
        shortName: 'ZIM',
        online: true,
        room: 'zasadačka online',
        linkToRoom: null,
        professor: ['Alena Pietriková'],
        professorEmail: ['alena.pietrikova@tuke.sk'],
        day: 2,
        start: [14,15],
        end: [15,45]
    },
    {
        name: 'Základy elektrotechnického inžinierstva',
        shortName: 'ZEI',
        online: false,
        room: 'L9-B221',
        linkToRoom: 'https://www.google.com/maps/search/?api=1&query=48.7304,21.24545',
        professor: ['Peter Bober', 'Branislav Fecko'],
        professorEmail: ['peter.bober@tuke.sk','branislav.fecko@tuke.sk'],
        day: 3,
        start: [15,55],
        end: [17,35]
    },
]