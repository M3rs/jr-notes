import './MainToon.css';
import {useState, useEffect} from 'react';

function MainToon () {
    const [offName, setOffName] = useState('');
    const [toonName, setToonName] = useState('');
    const [lp, setLP] = useState(2);
    const [guild, setGuild] = useState('0');

    useEffect(() => {
        const savedOfficer = localStorage.getItem('OfficerName');
        if (savedOfficer) {
            setOffName(savedOfficer);
        }
    }, []);
    const saveAndSetOfficerName = (e) => {
        const n = e.target.value;
        localStorage.setItem('OfficerName', n);
        setOffName(n);
    };

    const prefixes = ['GI', 'A2', 'A3', 'A4', 'A4'];
    const ranks = [
        ['Member','Member', 'Stalward', 'Dedicated','Prime'],
        ['Member','Member', 'Stalward', 'Dedicated','Prime'],
        ['Initiate', 'Initiate', 'Undaunted','Devoted','Acolyte'],
        ['Initiate', 'Initiate', 'Undaunted','Devoted','Acolyte'],
    ];
    const guildPrefixes = ['JR\\', 'JA\\', 'RR\\', 'DJ\\'];
    const toons = [1,2,3,4,4];

    const calcRank = () => {
        if (lp >= 150) {
            return 4;
        } else if (lp >= 35) {
            return 3;
        } else if (lp >= 10) {
            return 2;
        } else if (lp >= 2) {
            return 1;
        }

        return 0;
    };

    const calcNote = () => {
        const i = calcRank();

        if (lp == 0) {
            const date = new Date().toISOString().slice(5, 10).replace('-', '/');
            return `${prefixes[i]}~${date}~(${offName})`;
        }

        return `${prefixes[i]}~LP ${lp}`;
    };

    const calcAltNote = () => {
        return `{${toonName}}`;
    };

    const calcOtherGuildNote = () => {
        const i = calcRank();
        return `${prefixes[i]}~[${guildPrefixes[guild]}${toonName}]~LP ${lp}`;
    };

    const calcGuildRank = () => {
        return ranks[guild][calcRank()];
    };

    return (
        <div className="MainToon">
            <div className="Officer">
                <label>Inviting Officer</label>
                <input value={offName} onChange={saveAndSetOfficerName} />
            </div>
            <h3>Main Toon Info</h3>
            <div>
                <dl>
                    <dt>Name</dt>
                    <dd><input value={toonName} onChange={e => setToonName(e.target.value)} /></dd>
                    <dt>LP</dt>
                    <dd><input type="number" value={lp} onChange={e => setLP(e.target.value)} /></dd>
                    <dt>Guild</dt>
                    <dd>
                        <select value={guild} onChange={e => setGuild(e.target.value)}>
                            <option value='0'>Je'daii Reborn</option>
                            <option value='1'>Je'daii Academy</option>
                            <option value='2'>Revån's Råpture</option>
                            <option value='3'>Dark Je'daii</option>
                        </select>
                    </dd>
                    <dt>Note</dt>
                    <dd>{calcNote()}</dd>
                    <dt>Rank</dt>
                    <dd>{calcGuildRank()}</dd>
                    <dt>Toons Allowed</dt>
                    <dd>{toons[calcRank()]}</dd>
                    <dt>Alt Note</dt>
                    <dd>{calcAltNote()}</dd>
                    <dt>Other Guild Note</dt>
                    <dd>{calcOtherGuildNote()}</dd>
                </dl>
            </div>
        </div>
    );
}

export default MainToon;