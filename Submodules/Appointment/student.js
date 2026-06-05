document.addEventListener('DOMContentLoaded', function () {
    const addAppointmentBtn = document.getElementById('addAppointmentBtn');
    const formContainer = document.getElementById('formContainer');
    const newAppointmentForm = document.getElementById('newAppointmentForm');

    addAppointmentBtn.addEventListener('click', function () {
      formContainer.classList.toggle('hidden');
    });

    newAppointmentForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const studentName = document.getElementById('studentName').value;
      const department = document.getElementById('department').value;
      const appointmentDate = document.getElementById('appointmentDate').value;
      const reason = document.getElementById('reason').value;

      const consultationList = document.getElementById('consultationList');
      const acceptedList = document.getElementById('acceptedList');
      const rejectedList = document.getElementById('rejectedList');

      
      const li = document.createElement('li');
      const appointmentInfo = document.createElement('p');
      appointmentInfo.innerHTML = `<strong>Student:</strong> ${studentName}<br>
                                   <strong>Department:</strong> ${department}<br>
                                   <strong>Date:</strong> ${appointmentDate}<br>
                                   <strong>Reason:</strong> ${reason}`;
      li.className = 'appointment-item';
      li.appendChild(appointmentInfo);

      const acceptButton = document.createElement('button');
acceptButton.textContent = 'Accept';
acceptButton.className = 'accept-button';
acceptButton.addEventListener('click', function () {
acceptAppointment(li, acceptButton, rejectButton);
});

const rejectButton = document.createElement('button');
rejectButton.textContent = 'Reject';
rejectButton.className = 'reject-button';
rejectButton.addEventListener('click', function () {
rejectAppointment(li, acceptButton, rejectButton);
});



      li.appendChild(acceptButton);
      li.appendChild(rejectButton);

      
      consultationList.appendChild(li);

      formContainer.classList.add('hidden');
      newAppointmentForm.reset();
    });

    function acceptAppointment(appointment, acceptButton, rejectButton) {
      const acceptConfirm = confirm('Accept this appointment?');
      if (acceptConfirm) {
        acceptButton.style.display = 'none';
        rejectButton.remove();
        const acceptedList = document.getElementById('acceptedList');
        acceptedList.appendChild(appointment);
      }
    }

    function rejectAppointment(appointment, acceptButton, rejectButton) {
      const rejectConfirm = confirm('Reject this appointment?');
      if (rejectConfirm) {
        rejectButton.style.display = 'none';
        acceptButton.remove();
        const rejectedList = document.getElementById('rejectedList');
        rejectedList.appendChild(appointment);
      }
    }

    const cancelBtn = document.getElementById('cancelBtn');
    cancelBtn.addEventListener('click', function () {
      formContainer.classList.add('hidden');
      newAppointmentForm.reset();
    });
  });