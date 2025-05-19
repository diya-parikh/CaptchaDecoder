from flask import Flask, render_template, request, redirect, url_for
import random
import time

app = Flask(__name__)

# Track failed attempts with cooldown
last_failed_attempt_time = None
cooldown_time = 10  # Cooldown in seconds after a failed attempt

@app.route('/')
def index():
    global last_failed_attempt_time
    # Check if cooldown is active
    if last_failed_attempt_time and time.time() - last_failed_attempt_time < cooldown_time:
        remaining_time = int(cooldown_time - (time.time() - last_failed_attempt_time))
        return f'''
        <script>
        alert("Try again later. Please wait {remaining_time} seconds.");
        window.location.href = "/";
        </script>
        '''

    target_hour = random.randint(1, 12)
    target_minute = random.choice(range(0, 60, 5))  # Only multiples of 5
    return render_template('clock_game.html', target_hour=target_hour, target_minute=target_minute)

@app.route('/verify_time', methods=['POST'])
def verify_time():
    global last_failed_attempt_time
    target_hour = int(request.form['target_hour'])
    target_minute = int(request.form['target_minute'])
    user_hour = int(request.form['user_hour'])
    user_minute = int(request.form['user_minute'])

    # Check if the user-set time matches the target time
    if user_hour == target_hour % 12 and user_minute == target_minute:
        return redirect(url_for('welcome'))
    else:
        # If incorrect, set cooldown and deny access
        last_failed_attempt_time = time.time()
        return '''
        <script>
        alert("Incorrect! Access Denied. Try again later.");
        window.location.href = "/";
        </script>
        '''

@app.route('/welcome')
def welcome():
    return render_template('welcome.html')

if __name__ == '__main__':
    app.run(debug=True)
