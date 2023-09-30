<script src="Cherry Cloudv1HTML.html" integrity="Cherry Cloudv1HTML.html" crossorigin="anonymous"></script>

var database = [
	{
		username: "cherryclouddemo",
		password: "demo123"
	}
];


var userNamePrompt = prompt("What's your username?")
var passwordPrompt = prompt("What's your password?")

function signIn(username, password) {
	if (username === database[0], username && 
		password === database[0], password) {
			console.log(logIn);
			else{
				alert("Incorrect username or password");
			}
		}
}

const selectElement = document.querySelector('select');

const leasing = document.getElementById('Leasing');
const renewals = document.getElementById('Renewals');
const delinquency = document.getElementById('Delinquency');
const maintenance = document.getElementById('Maintenance');
const management = document.getElementById('Management');
const acquisitions = document.getElementById('Acquisitions');

selectElement.addEventListener('change', function() {
    const selectedOption = selectElement.value;

    leasing.style.display = 'none';
    renewals.style.display = 'none';
    delinquency.style.display = 'none';
    maintenance.style.display = 'none';
    management.style.display = 'none';
    acquisitions.style.display = 'none';

    if (selectedOption === 'Leasing') {
        leasing.style.display = 'block';
    } else if (selectedOption === 'Renewals') {
        renewals.style.display = 'block';
    } else if (selectedOption === 'Delinquency') {
        delinquency.style.display = 'block';
    } else if (selectedOption === 'Maintenance') {
        maintenance.style.display = 'block';
    } else if (selectedOption === 'Management') {
        management.style.display = 'block';
    } else if (selectedOption === 'Acquisitions') {
        acquisitions.style.display = 'block';
    }
});



/*Leasing*/
function collectLeasingData() {
    var newProspectsWTD = prompt("How many new prospects were there this past week?");
    var newProspectsMTD = prompt("How many new prospects were there this past month?");
    var newProspectsQTD = prompt("How many new prospects were there this past quarter?");
    var newProspectsYTD = prompt("How many new prospects were there this past year?");
    
    alert("WTD: " + newProspectsWTD + "\nMTD: " + newProspectsMTD + "\nQTD: " + newProspectsQTD + "\nYTD: " + newProspectsYTD);
    
    const firstTour = 'First Tour';
    let closingRatio = 30; 
    let successfulConversion = true;}

    if (closingRatio >= 30) {
        successfulConversion = true; 
        console.log(successfulConversion);}
    

    var visitsWTD = prompt("How many visits were there this past week?");
    var visitsMTD = prompt("How many visits were there this past month?");
    var visitsQTD = prompt("How many visits were there this past quarter?");
    var visitsYTD = prompt("How many visits were there this past year?");
    
    alert("WTD: " + visitsWTD + "\nMTD: " + visitsMTD + "\nQTD: " + visitsQTD + "\nYTD: " + visitsYTD);

	if (visits >= 20) {
		successfulConversion = true;
		console.log(successfulConversion);
	}

	var netLeasesWTD = prompt("How many leases were there this past week?");
    var netLeasesMTD = prompt("How many leases were there this past month?");
    var netLeasesQTD = prompt("How many leases were there this past quarter?");
    var netLeasesYTD = prompt("How many leases were there this past year?");
    
	alert("WTD: " + netLeasesWTD + "\nMTD: " + netLeasesMTD + "\nQTD: " + netLeasesQTD + "\nYTD: " netLeasesYTD);

	if (netleases >= 10) {
		successfulConversion = true;
		console.log(successfulConversion);
	}

    var closingRatioWTD = prompt("What was the closing ratio for this week?");
    var closingRatioMTD = prompt("What was the closing ratio for this month?");
    var closingRatioQTD = prompt("What was the closing ratio for this past quarter");
    var closingRatioYTD = prompt("What was the closing ratio for this past year?");
    
	alert("WTD: " + closingRatioWTD "\nMTD: " + closingRatioMTD + "\nQTD: " + closingRatioQTD + "\nYTD: " closingRatioYTD);

	if (closingRatio >= 30) {
		successfulConversion = true;
		console.log(successfulConversion);
	}

    var leasedPercentageWTD = prompt("How many leases were executed this week?");
    var leasedPercentageMTD = prompt("How many leases were executed this month?");
    var leasedPercentageQTD = prompt("How many leases were executed this quarter?");
    var leasedPercentageYTD = prompt("How many leases were executed this year?");

    alert( "WTD: " +leasedPercentageWTD + "\nMTD: " + leasedPercentageMTD + "\nQTD: " leasedPercentageQTD + "\nYTD: " leasedPercentageYTD);

	if (leasedPercentage >= 10); {
	leasedPercentage = true;
	console.log(successfulLeasing);
	}

    var occupanyPercentageWTD = prompt("What is the occupancy percent for the week?");
    var occupanyPercentageMTD = prompt("What is the occupancy percent for the month?");
    var occupanyPercentageQTD = prompt("What is the occupancy percent for the quarter?");
    var occupanyPercentageYTD = prompt("What is the occupancy percent for the year?");

    alert( "WTD: " + occupanyPercentageWTD "\nMTD: " + occupanyPercentageMTD + "\nQTD: " + occupanyPercentageQTD + "\nYTD: " occupanyPercentageYTD);

	if (occupanyPercentageMTD >= 90); {
	occupanyPercentageMTD = true;
	console.log(fullHouse);
	}

	var googleScoreWTD = prompt("What is the google score this week?");
    var googleScoreMTD = prompt("What is the point increase or decrease this month?");
    var googleScoreQTD = prompt("What is the point increase or decrease this quarter?");
    var googleScoreYTD = prompt("What is the point increase or decrease this year?");
   
	alert("WTD: " + googleScoreWTD "\nMTD: " + googleScoreMTD + "\nQTD: " googleScoreQTD + "\nYTD: " googleScoreYTD);

	if (googleScore >= 4);{
	googleScore = true;
	console.log(YouAreAStar);
	}

	const totalVacant = prompt("What are the total units not currently occupied?");
	alert("Total Vacant: " + totalVacant);


    const downAdmin = prompt("How many units are designated as being used for admin purposes or maintence has determined as unsellable?");
	alert("Down Units for Admin: " + downAdmin);

    const totalVacantLeased = prompt("Out of all the vacant units, how many are sold with an executed lease agreement?");
    alert("Total Vacant Units Leased: " + totalVacantLeased);

    const totalVacantNotLeasedWTD = prompt("Out of all the vacant units, how many are not sold with an executed lease agreement?");
    alert("Total Vacant Units Not Leased: " + totalVacantLeasedWTD);

    const totalVacantNotLeasedNotReadyWTD = prompt("Out of all the vacant units, how many are not sold & are not 'made ready'?");
    alert("Total Vacant Units Not Leased & Are Not Ready: " + totalVacantNotLeasedNotReadyWTD);

    const totalVacantNotLeasedReadyWTD = prompt("Out of all the vacant units, how many are sold & are not 'made ready'?");
	alert("Total Vacant Units Not Leased & Are Ready: " + totalVacantNotLeasedReadyWTD);

    const totalNTVNext30Days = prompt("For the next 30 day period how many units are expected to be vacant based on NTV's?");
	alert("Total NTV's coming due for the next 30 days: " + totalNTVNext30Days);

	collectLeasingData();


/*Renewals*/

    var totalLeasesExpiring = prompt("What are the total number of leases expiring?");

	var leasesExpiringRenewed = prompt("What are the total number of leases expiring that have renewed(new leases executed but not in effect)?"/*This can be percentage or actual number*/);

	var leasesExpiringWillRenew = prompt("How many leases are expiring that will be renewed?");

	var leasesExpiringNTV = prompt("How many leases are expiring that we have recieved NTV's for?");

	var leasesExpiringGoingMTM = prompt("How many of the leases expiring are going Month-to-Month?");

	var leasesExpiringNoResponse = prompt("How many of the leases expiring have not given their response to renew?");

	var totalMTM = prompt("How many of the total leases are going Month-to-Month?");

	var mtmDueToEvictionProceeding = prompt("How many of those units that are MTM are due for evication(can not renew because of balance due)?");

	var willStayMTM = prompt("How many units will continue as mtm(out of the units currently MTM how many have renewed, vacated, or evicted)?)");

	var ntv = prompt("How many units are on notice to vacate?");

	var willRenew = prompt("How many units will renew? Units that have given intention to renew but now executed lease");

/*Delinquency*/
    var totalResidentsDelinquent ($1,000 +) 30 days = prompt("How many residents are deliquent in the past 30days with a balance of $1,000 or greater?");
	if (totalResidentsDelinquent === $1000 + '30 days' || "Balance owed") {
		alert("submit intent to file");
	} else if (totalResidentsDelinquent === $1000 && "acount in grace period") {
		alert("send reminder balance is due and late fees are to begin accruing");
	} else (!( totalResidentsDelinquent === $1000)){
		alert("monitor account");
	}

	var totalResidentsDelinquent ($1,000 +) 60 days = prompt("How many residents are deliquent in the past 60days with a balance of $1,000 or greater?");
	if (totalResidentsDelinquent === $1000 + '60 days' || "Balance owed") {
		alert("submit intent to file");
	} else if (totalResidentsDelinquent === $1000 && "intent has been filed") {
		alert("follow up on status for evicition date");
	} else (!( totalResidentsDelinquent === $1000)){
		alert("confirm evicition with local authority");
	}

	var totalResidentsDelinquent ($1,000 +) 90 days = prompt("How many residents are deliquent in the past 90days with a balance of $1,000 or greater?");
	if (totalResidentsDelinquent === $1000 + '90 days' || "Balance owed") {
		alert("submit intent to file");
	} else if (totalResidentsDelinquent === $1000 && "evicition has been scheduled") {
		alert("confirm evicition with local authority");
	} else (!( totalResidentsDelinquent === $1000)){
		alert("check on recent balance for any additional payments made after the fact prior to evicition date & time");
	}

	var statusOnResidentsIn90Column = prompt("Residents that have been deliquent for 90 days or carry a balance?");
	if (statusOnResidentsIn90Column === 'balance owed' && 'have not been evicited') {
		alert("request summary judgement");
	}	else ("file for eviction")

	var oweAtLeast ($500 +) in 90+ Column = prompt("How many of the residents that have had a balance for 90days or more have a balance of $500 plus?");
	if (oweAtLeast =< $500){
		alert("monitor");
	} else if (oweAtLeast >= $500){
		alert("review account next report");
	} else {
		alert("no balance carried");
	}

/*Maintence*/
    var openFromPriorPeriodWTD = prompt("How many maintenance tickets are still open from prior week?");
    var openFromPriorPeriodMTD = prompt("How many maintenance tickets are still open from prior month?");
    var openFromPriorPeriodOverdue = prompt("How many maintenance tickets are still open for month than a month?");
    alert("WTD: " + openFromPriorPeriodWTD + "\nMTD: " + openFromPriorPeriodMTD + "\nOverdue: " + openFromPriorPeriodOverdue);
	if (openFromPriorPeriod <= 10) {
		openFromPriorPeriod = true;
		console.log(OnTrack);
	}


	var requestsRecievedWTD = prompt("How many maintenance requests have been recieved this past week?");
    var requestsRecievedMTD = prompt("How many maintenance requests have been recieved this past month?");
    var requestsRecievedQTD = prompt("How many maintenance requests have been received this past quarter?");
    var requestsRecievedYTD = prompt("How many maintenance requests have been recieved this past year?");
    alert("WTD: " + requestsRecievedWTD + "\nMTD: " + requestsRecievedMTD + "\nQTD: " requestsRecievedQTD + "\nYTD: " requestsRecievedYTD);
	if (requestsRecieved <= 10) {
		requestRecieved = true;
		console.log(OnTrack);
	}

	var requestsCompletedWTD = prompt("How many maintenance requests have been completed this past week?");
    var requestsCompletedMTD = prompt("How many maintenance requests have been completed this past month?");
    var requestsCompletedQTD = prompt("How many maintenance requests have been completed this past quarter?");
    var requestsCompletedYTD = prompt("How many maintenance requests have been completed this past year?");
    alert("WTD: " + requestsCompletedWTD + "\nMTD: " requestsCompletedMTD + "\nQTD: " + requestsCompletedQTD + "\nYTD: " requestsCompletedYTD);
	if (requestsCompleted >= requestsRecieved) {
		requestsCompleted = true;
		console.log(OnTrack)
	}

	var requestsOpenAtEndOfPeriodWTD = prompt("How many requests recieved are still open at the end of the week?");
    var requestsOpenAtEndOfPeriodMTD = prompt("How many requests recieved are still open at the end of the month?");
    var requestsOpenAtEndOfPeriodOverdue = prompt("How many requests recieved are still open that are now overdue?");	    
	alert("WTD: " + requestsOpenAtEndOfPeriodWTD + "MTD: " + requestsOpenAtEndOfPeriodMTD + "\nOverdue: " requestsOpenAtEndOfPeriodOverdue);
	if (requestsOpenAtEndOfPeriod >= requestsRecieved) {
		requestsOpenAtEndOfPeriod = true;
		console.log(evaluateProblem);
	}


/*Management*/
    /*const accuralAccounting(All income - all expenses);*/
	let allIncome = allIncome;
	let allExpenses = allExpenses;
	let accuralAccounting = allIncome - allExpenses;
	console.log(accuralAccounting);

	/*const amountOfRentIncrease(Average Effective Rent for Renewal - Average Effective Rent on Previous Lease);*/
	let averageEffectiveRentForRenewal = averageEffectiveRentForRenewal;
	let averageEffectiveRentOnPreviousLease = averageEffectiveRentOnPreviousLease;
	let amountOfRentIncrease = averageEffectiveRentForRenewal - averageEffectiveRentOnPreviousLease;
	console.log(amountOfRentIncrease);

	/*const Annualization(Average of actual months of expenses (or income) / number of months reported x 12);*/
	let averageOfActualMonthsExpenses = averageOfActualMonthsExpenses;
	let numberOfMonthsReported = numberOfMonthsReported;
	let year = 12;
	let annualizationExpenses = averageOfActualMonthsExpenses / (numberOfMonthsReported * year);
	console.log(annualizationExpenses);

	let averageOfActualMonthsIncome = averageOfActualMonthsIncome;
	let numberOfMonthsReported = numberOfMonthsReported;
	let year = 12;
	let annualizationIncome = averageOfActualMonthsIncome / (numberOfMonthsReported * year);
	console.log(annualizationIncome);

	/*const average Effective Rent(Total Rent Revenue / Units Occupied);*/
	let totalRentRevenue = totalRentRevenue;
	let unitsOccupied = unitsOccupied;
	let averageEffectiveRent = totalRentRevenue / unitsOccupied;
	console.log(averageEffectiveRent);

	/*const badDebt(Total Uncollected rent income due to non-payment);*/
	const badDebt = prompt("What is the total uncollect rent income due to non-payment?");
	console.log(badDebt);

	/*const breakEvenOccupanyRatio (Operating Expense + Debt Service + Replacement Reserve);*/
	let operatingExpense = operatingExpense;
	let debtService = debtService;
	let replacementReserve = replacementReserve;
	let breakEvenOccupanyRatio = operatingExpense + debtService + replacementReserve;
	console.log(breakEvenOccupanyRatio);

	/*const breakevenRentPerSquareFoot((Operating Expenses + Debt Service + Replacement Reserve)/ Total Property Square Feet);*/
	let operatingExpense = operatingExpense;
	let debtService = debtService;
	let replacementReserve = replacementReserve;
	let totalPropertySquareFeet = totalPropertySquareFeet;
	let breakEvenRentPerSquareFoot = (operatingExpense + debtService + replacementReserve) / totalPropertySquareFoot;
	console.log(breakEvenRentPerSquareFoot);

	/*const capitalExpense(Large Improvements);*/
	const capitalExpense = prompt("What is the total cost of any large improvements(capital expenses)?");
	console.log(capitalExpense);

	/*const capitalizationRateOrCapRate(Net Operting Income / Purchase Price);*/
	let netOperatingIncome = netOperatingIncome;
	let purchasePrice = purchasePrice;
	let capitalizationRateOrCapRate = netOperatingIncome / purchasePrice;
	console.log(capitalizationRateOrCapRate);

	/*const cashFlow (Net Operating Income - Debt Service - Capital Expense - Replacement Reserve);*/
	let netOperatingIncome = netOperatingIncome;
	let debtService = debtService;
	let capitalExpense = capitalExpense;
	let replacementReserve = replacementReserve;
	let cashFlow = netOperatingIncome - debtService - capitalExpense - replacementReserve;
	console.log(cashFlow);

	/*const cashOnCashReturn (Cash Flow / Down Payment (or initial Equity));*/
	let cashFlow = cashFlow;
	let downPayment = downPayment;
	let cashOnCashReturn = cashFlow / downPayment;
	console.log(cashOnCashReturn);

	/*const debtService(Loan/Mortgage payment);*/
	let loan = loan;
	let mortgagePayment = mortgagePayment;
	let debtService = loan / mortgagePayment;
	console.log(debtService);

	/*const effectiveGrossIncome(Gross Potential Rent - Vacancy = Total Rent Revenue + Operating Income);*/
	let grossPotentialRent = grossPotentialRent;
	let vacancy = vacancy;
	let totalRentRevenue = totalRentRevenue;
	let operatingIncome = operatingIncome;
	let effectiveGrossIncome = (grossPotentialRent  - vacancy) = totalRentRevenue + operatingIncome;
	console.log(effectiveGrossIncome);

	/*const effectiveMarketRent ((Monthly Market Rent x # of months in lease - total concessions)/ # of months in lease);*/
	let monthlyMarketRent = monthlyMarketRent;
	let numberOfMonthsInLease = numberOfMonthsInLease;
	let totalConcessions = totalConcessions;
	let effectiveMarketRent = ((monthlyMarketRent * numberOfMonthsInLease) - totalConcessions) / numberOfMonthsInLease;
	console.log(effectiveMarketRent);

	/*const grossPotentialIncome(Occupied Units x Average Leased Rent + Vacant Units x Average Market Rent);*/
	let occupiedUnits = occupiedUnits;
	let averageLeasedRent = averageLeasedRent;
	let vacantUnits = vacantUnits;
	let averageMarketRent = averageMarketRent;
	let grossPotentialIncome = occupiedUnits * averageLeasedRent * vacantUnits * averageMarketRent;
	console.log(grossPotentialRent);

	/*const grossPotentialRent (Total Units x Average Market Rent);*/
	let totalUnits = totalUnits;
	let averageMarketRent = averageMarketRent;
	let grossPotentialRent = totalUnits * averageMarketRent;
	console.log(grossPotentialRent);

	/*const leasedPercentage (Leased Units / Total Units);*/
	let leasedUnits = leasedUnits;
	let totalUnits = totalUnits;
	let leasedPercentage = leasedUnits / totalUnits;
	console.log(leasedPercentage);

	/*const leasedUnits (Total Units - Vacant Units - Notices to Vacate + Vacant Units Leased + Notices to Vacate Preleased);*/
	let totalUnits = totalUnits;
	let vacantUnitsLeased = vacantUnitsLeased;
	let noticesToVacate = nTV;
	let noticesToVacatePreLeased = preleasedNTV;
	let leasedUnits = (totalUnits - vacantUnits - nTV) + vacantUnitsLeased + preleasedNTV;
	console.log(leasedUnits);

	/*const netOperatingIncome (Effective Gross Income - Operating Expenses);*/
	let effectiveGrossIncome = effectiveGrossIncome;
	let operatingExpense = operatingExpense;
	let netOperatingIncome = effectiveGrossIncome - operatingExpense;
	console.log(netOperatingIncome);

	/*const operatingExpenseRatio (Operating Expense / Effective Gross Income);*/
	let operatingExpense = operatingExpense;
	let effectiveGrossIncome = effectiveGrossIncome;
	let operatingExpenseRatio = operatingExpense / effectiveGrossIncome;
	console.log(operatingExpenseRatio)

	/*const percentRenewalIncrease (Amount of Increase / Previous Lease Rent);*/
	let amountOfIncrease = amountOfIncrease;
	let previousLeaseRent = previousLeaseRent;
	let percentRenewalIncrease = amountOfIncrease / previousLeaseRent;
	console.log(percentRenewalIncrease);

	/*const replacementReserve (amount set asided for future expenses and projects);*/
	const replacementReserve = prompt("What is the amount set aside for furture expenses and projects?");
	console.log(replacementReserve);

	/*const returnOnInvestment (Return / Investment);*/
	let returnIncome = returnIncome;
	let investment = investment;
	let returnOnInvestment = returnIncome / investment;
	console.log(returnOnInvestment);

	/*const totalRentRevenue (Gross Potential Rent - Vacancy);*/
	let grossPotentialRent = grossPotentialRent;
	let vacancy = vacancy;
	let totalRentRevenue = grossPotentialRent - vacancy;
	console.log(totalRentRevenue);

	/*const turnoverRatio (Total Number of Move Outs / Total Number of Units);*/
	let totalNumberOfMoveOuts = totalNumberOfMoveOuts;
	let totalNumberOfUnits = totalNumberOfUnits;
	let turnoverRatio = totalNumberOfMoveOuts / totalNumberOfUnits;
	console.log(turnoverRatio);

	/*const vacancy/collectionLoss (Vacancy, Collection Loss, Non Revenue Units, and Concessions);*/
	const collectionLoss = prompt("What is the total collection loss? This would be the total vacancy cost, collection loss, non revenue units and concessions.")
	console.log(collectionLoss);

/*Aquisitions*/
    /*const interestForLoan (Interest= Principal x Rate x Time);*/
	let principal = principal;
	let rate = rate;
	let time = time;
	let interestForLoan = principal * rate * time;
	console.log(interestForLoan);

	/*const principalOnLoan ([Principal = Interest ÷ (% Rate x Time)]);*/
	let interest = interest;
	let percentRate = percentRate;
	let time = time;
	let principalOnLoan = interest / (percentRate * time);
	console.log(principalOnLoan)

	/*const rateOnLoan ([Rate = Interest ÷ (Principal x Time)]);*/
	let interest = interest;
	let principalOnLoan = principalOnLoan;
	let time = time;
	let rateOnLoan = interest / (principalOnLoan * time);
	console.log(rateOnLoan);

	/*const netOperatingIncome (NOI = Property Value x Cap Rate);*/
	let propertyValue = propertyValue;
	let capRate = capRate;
	let netOperatingIncome = propertyValue * capRate;
	console.log(netOperatingIncome);

	/*const propertyValue (Property Value = NOI ÷ Cap Rate);*/
	let netOperatingIncome = netOperatingIncome;
	let capRate = capRate;
	let propertyValue = netOperatingIncome / capRate;
	console.log(propertyValue);

	/*const capRate (Cap Rate = NOI ÷ Property Value);*/
	let netOperatingIncome = propertyValue;
	let propertyValue = propertyValue;
	let capRate = netOperatingIncome / propertyValue;
	console.log(capRate);

	/*const income(Income = Amount Paid x Rate of Return);*/
	let amountPaid = amountPaid;
	let rateOfReturn = rateOfReturn;
	let income = amountPaid * rateOfReturn;
	console.log(income);

	/*const amountPaid (Amount Paid = Income ÷ Rate of Return);*/
	let income = income;
	let rateOfReturn = rateOfReturn;
	let amountPaid = income / rateOfReturn;
	console.log(amountPaid);

	/*const rateOfReturn (Rate of Return = Income ÷ Amount Paid);*/
	let income = income;
	let amountPaid = amountPaid;
	let rateOfReturn = income / amountPaid;
	console.log(rateOfReturn);

	/*const increaseInValue (Increase = Purchase Price x Rate of Return);*/
	let purchasePrice = purchasePrice;
	let rateOfReturn = rateOfReturn;
	let increaseInValue = purchasePrice * rateOfReturn;
	console.log(increaseInValue);

	/*const purchasePrice (Purchase Price = Increase ÷ Rate of Return);*/
	let increaseInValue = increaseInValue;
	let rateOfReturn = rateOfReturn;
	let purchasePrice = increaseInValue / rateOfReturn;
	console.log(purchasePrice);

	/*const rateOfReturn (Rate = Increase ÷ Purchase Price);*/
	let increaseInValue = increaseInValue;
	let purchasePrice = purchasePrice;
	let rateOfReturn = increaseInValue / purchasePrice;
	console.log(rateOfReturn);

	/*const loanToValue (LTV= Loan Amount / Sales price or appraised value (whichever is less));*/
	let loanAmount = loanAmount;
	let salesPriceOrAppraisedPrice = salesPriceOrAppraisedPrice;
	let loanToValue = loanAmount / salesPriceOrAppraisedPrice;
	console.log(loanToValue);

	/*const loanAmount (Sales Price or appraised value(whichever is less)x Loan-to-Value(LTV));*/
	let salesPriceOrAppraisedPrice = salesPriceOrAppraisedPrice;
	let loanToValue = loanToValue;
	let loanAmount = salesPriceOrAppraisedPrice * loanToValue;
	console.log(loanAmount);

	/*const salesPriceOrAppraisedPrice(Loan amount / Loan-to-Value(LTV));*/
	let loanAmount = loanAmount;
	let loanToValue = loanToValue;
	let salesPriceOrAppraisedPrice = loanAmount / loanToValue;
	console.log(salesPriceOrAppraisedPrice);

	/*const annualInterest(loan amount(Principal) x annual interest rate);*/
	let loanAmount = loanAmount;
	let annualInterestRate = annualInterestRate;
	let annualInterest = loanAmount * annualInterestRate;
	console.log(annualInterest);

	/*const principalLoanAmount (Annual Interest / Annual Interest Rate);*/
	let annualInterest = annualInterest;
	let annualInterestRate = annualInterestRate;
	let principalLoanAmount = annualInterest / annualInterestRate;
	console.log(principalLoanAmount);

	/*const annualInterestRate (Annual Interest / Loan Amount(principal));*/
	let annualInterest = annualInterest;
	let loanAmount = loanAmount;
	let annualInterestRate = annualInterestRate;
	console.log(annualInterestRate);

	/*const amountPaidForPoints (Loan amount x Points as Percentage of Loan);*/
	let loanAmount = loanAmount;
	let pointsAsPercentageOfLoan = pointsAsPercentageOfLoan;
	let amountPaidForPoints = loanAmount * pointsAsPercentageOfLoan;
	console.log(amountPaidForPoints);

	/*const loanAmount(Amount Paid for Points / Points as Percentage of Loan);*/
	let amountPaidForPoints = amountPaidForPoints;
	let pointsAsPercentageOfLoan = pointsAsPercentageOfLoan;
	let loanAmount = amountPaidForPoints / pointsAsPercentageOfLoan;
	console.log(loanAmount);

	/*const pointsAsPercentageOfLoan (Amount Paid for Points / Loan Amount);*/
	let amountPaidForPoints = amountPaidForPoints;
	let loanAmount = loanAmount;
	let pointsAsPercentageOfLoan = amountPaidForPoints / loanAmount;
	console.log(pointsAsPercentageOfLoan);

	/*const percentageRent (Gross sales subject to percentage x % in the lease);*/
	let grossSalesSubjectToThePercentage = grossSalesSubjectToThePercentage;
	let percentInTheLease = percentInTheLease;
	let percentageRent = grossSalesSubjectToThePercentage * percentInTheLease;
	console.log(percentageRent);

	/*const grossSalesSubjectToThePercentage (Percentage Rent / % in the lease);*/
	let percentageRent = percentageRent;
	let percentInTheLease = percentInTheLease;
	let grossSalesSubjectToThePercentage = percentageRent / percentInTheLease;
	console.log(grossSalesSubjectToThePercentage);

	/*const percentInTheLease (Percentage Rent / Gross Sales Suject to the Percentage);*/
	let percentageRent = percentageRent;
	let grossSalesSubjectToThePercentage = grossSalesSubjectToThePercentage;
	let percentInTheLease = percentageRent / grossSalesSubjectToThePercentage;
	console.log(percentInTheLease);