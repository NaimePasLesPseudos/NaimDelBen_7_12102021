import { DateTime } from 'luxon' 

export function dateTime(dateTarget) {
    const dateReturn = luxonDate()

    function luxonDate() {
        try {
            const dt = DateTime.fromISO(dateTarget)
            var d = {month: 'long', day: 'numeric', year: 'numeric'}
            var h = {hour: 'numeric', minute: 'numeric'}
            const hour = dt.setLocale('fr').toLocaleString(h)
            const date = dt.setLocale('fr').toLocaleString(d)

            const res = date + " à " + hour

            return res
        } catch (e) {
            console.log(e);
        }
    }

    return {
        dateReturn
    }
}